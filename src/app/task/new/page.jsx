"use client";
import { ChangeEvent, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();
  const params = useParams();
  const getTask = async () => {
    const res = await fetch(`/api/task/${params.id}`);
    const data = await res.json();
    setNewTask({
      title: data.title,
      description: data.description,
    });
  };

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

      if (res.status === 200) {
        router.push("/");
        router.refresh();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async () => {
    try {
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const delteTask = async () => {
    if (window.confirm("seguro que quieres eliminar??")) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: "DELETE",
      });
      router.push("/");
      router.refresh();
    }
  };
  const handleSumit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      await CreateTask();
    } else {
      updateTask();
      console.log("actulizando");
    }
  };

  const handleChange = (e) =>
    setNewTask({ ...newTask, [e.target.name]: e.target.value });

  useEffect(() => {
    if (params.id) {
      getTask();
    }
  }, []);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center ">
      <form onSubmit={handleSumit}>
        <header className="flex justify-between">
          <h1 className="text-3xl text-white font-bold">
            {!params.id ? "crea una tarea " : "actualiza tu tarea"}
          </h1>

          <button
            type="button"
            className="bg-red-500 px-3 py-1 rounded-md"
            onClick={delteTask}
          >
            Eliminar
          </button>
        </header>
        <input
          type="text"
          name="title"
          placeholder="Escribe un titulo"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4 text-white"
          onChange={handleChange}
          value={newTask.title}
        />
        <textarea
          type="description"
          name="description"
          rows={3}
          placeholder="escribe tu dato"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4  text-white"
          onChange={handleChange}
          value={newTask.description}
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white fond-bolt p-4 rounded-lg"
        >
          {!params.id ? "guardar" : "actualizar"}
        </button>
      </form>
    </div>
  );
}
