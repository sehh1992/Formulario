"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function App() {
  const schema = yup.object().shape({
    firsName: yup
      .string()
      .trim()
      .matches(/^([^0-9_-]*)$/, "no debes ingresar numeros ni simbolos")
      .required("Este campo es obligatorio"),
    lastName: yup
      .string()
      .trim()
      .matches(/^([^0-9_-]*)$/, "no debes ingresar numeros ni simbolos"),
    email: yup
      .string()
      .required("Este campo es obligatorio")
      .matches(/^\S+@\S+\.\S+$/, "debe ser un correo valido")
      .email("no es email valido"),
    age: yup
      .number()
      .nonNullable("no as escrito")
      .required("cual es tu edad")
      .typeError("Debes de poner tu edad")
      .positive()
      .min(18, "tienes que tener almenos 18 años")
      .integer(),
    password: yup.string().min(4).max(8).required("este campo es obligatorio"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "tu contraseña no coinside")
      .required("este campo es obligatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitFor = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmitFor)}
        className="bg-gray-500 p-4 rounded-lg"
      >
        <header className="fond-bold text-2xl text-center mb-2">
          FORMULARIO
        </header>
        <div>
          <div className="bg-gray-800 py-3 px-2 block">
            <label htmlFor="firsName">Nombre </label>
            <input
              className="bg-gray-300 block text-black"
              type="text"
              name="firsName"
              id="firsName"
              {...register("firsName")}
            />
            <p className="fond-bold text-sm mt-1">{errors.firsName?.message}</p>
          </div>
          <div className="bg-gray-800 py-3 px-2 block">
            <label htmlFor="lastName">Apellido </label>
            <input
              className="bg-gray-300 block text-black"
              type="text"
              name="lastName"
              id="lastName"
              {...register("lastName")}
            />
            <p className="fond-bold text-sm mt-1">{errors.lastName?.message}</p>
          </div>
          <div className="bg-gray-800 py-3 px-2 block">
            <label htmlFor="email">Correo </label>
            <input
              className="bg-gray-300 block text-black"
              type="email"
              name="email"
              id="email"
              {...register("email")}
            />
            <p className="fond-bold text-sm mt-1">{errors.email?.message}</p>
          </div>
          <div className="bg-gray-800 py-3 px-2 block ">
            <label htmlFor="age">Edad</label>
            <input
              className="bg-gray-300 block text-black"
              type="number"
              name="age"
              id="age"
              {...register("age")}
            />
            <p className="fond-bold text-sm mt-1">{errors.age?.message}</p>
          </div>
          <div className="bg-gray-800 py-3 px-2 block">
            <label htmlFor="password">Contraseña</label>
            <input
              className="bg-gray-300 block text-black"
              type="password"
              name="password"
              id="password"
              {...register("password")}
            />
            <p className="fond-bold text-sm mt-1">{errors.password?.message}</p>
          </div>
          <div className="bg-gray-800 py-3 px-2 block">
            <label htmlFor="confirmPassword">Confirma tu contraseña</label>
            <input
              className="bg-gray-300 block text-black"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <p className="fond-bold text-sm mt-1">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            type="submit"
            className=" mt-3 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          >
            enviar
          </button>
        </div>
      </form>
    </div>
  );
}
