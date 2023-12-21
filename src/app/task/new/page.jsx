"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();
  const CreateTask = async () => {
    try {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      router.push("/");
      router.refresh();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSumit = async (e) => {
    e.preventDefault();
    await CreateTask();
  };
  const handleChange = (e) =>
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center ">
      <form onSubmit={handleSumit}>
        <header className="text-3xl text-white font-bold">Crea tu tarea</header>
        <input
          type="text"
          name="title"
          placeholder="Escribe un titulo"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4 text-white"
          onChange={handleChange}
        />
        <textarea
          type="description"
          name="description"
          rows={3}
          placeholder="escribe tu dato"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4  text-white"
          onChange={handleChange}
        />
        <button className="bg-green-600 hover:bg-green-700 text-white fond-bolt p-4 rounded-lg">
          Guardar
        </button>
      </form>
    </div>
  );
}
