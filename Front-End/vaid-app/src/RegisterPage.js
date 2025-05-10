// pages/RegisterPage.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Registration data:", data);
    alert("Registered successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-50">
      <div className="bg-white p-8 shadow-md rounded max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("firstName")} placeholder="First Name" className="input" />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>

          <input {...register("lastName")} placeholder="Last Name" className="input" />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>

          <input {...register("phone")} placeholder="Phone" className="input" />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>

          <input {...register("email")} placeholder="Email" className="input" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input type="password" {...register("password")} placeholder="Password" className="input" />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="input" />
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
