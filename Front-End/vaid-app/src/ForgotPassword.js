// pages/ForgotPassword.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  userId: Yup.string().required("User ID is required"),
  email: Yup.string().email().required("Email is required"),
  otp: Yup.string().length(4, "OTP must be 4 digits").required("OTP is required"),
});

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Forgot Password Data:", data);
    alert("Password recovery flow initiated!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-purple-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("userId")} placeholder="User ID" className="w-full px-3 py-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.userId?.message}</p>

          <input {...register("email")} placeholder="Email" className="w-full px-3 py-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input {...register("otp")} placeholder="OTP" className="w-full px-3 py-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.otp?.message}</p>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
