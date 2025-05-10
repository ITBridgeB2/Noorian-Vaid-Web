// pages/LoginPage.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Login data:", data);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("username")}
              placeholder="User Name"
              className="w-full px-3 py-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.username?.message}</p>
          </div>
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-purple-600 hover:underline mt-2 block text-center"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </div>
  );
}
