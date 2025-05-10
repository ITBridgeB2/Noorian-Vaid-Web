// pages/PatientRegisterPage.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Validation schema
const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  contactNo: Yup.string().required("Contact No is required"),
  gender: Yup.string().required("Gender is required"),
  illnessCategory: Yup.string().required("Illness Category is required"),
  illnessDays: Yup.number()
    .required("Number of days is required")
    .positive("Must be positive")
    .integer("Must be an integer"),
});

export default function PatientRegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Patient Registration Data:", data);
    navigate("/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Patient Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Patient Info */}
          <div className="col-span-2 font-semibold text-lg">Patient Information</div>

          <div>
            <input {...register("firstName")} placeholder="First Name" className="input" />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
          </div>

          <div>
            <input {...register("lastName")} placeholder="Last Name" className="input" />
            <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
          </div>

          <div>
            <input {...register("contactNo")} placeholder="Contact No" className="input" />
            <p className="text-red-500 text-sm">{errors.contactNo?.message}</p>
          </div>

          <div className="flex gap-4 items-center">
            <label className="font-medium">Gender:</label>
            <label>
              <input type="radio" value="Male" {...register("gender")} /> Male
            </label>
            <label>
              <input type="radio" value="Female" {...register("gender")} /> Female
            </label>
          </div>
          <p className="text-red-500 text-sm col-span-2">{errors.gender?.message}</p>

          {/* Illness Info */}
          <div className="col-span-2 font-semibold text-lg mt-6">Illness Details</div>

          <div>
            <select {...register("illnessCategory")} className="input">
              <option value="">Select Category</option>
              <option value="Fever">Fever</option>
              <option value="Cough">Cough</option>
              <option value="Headache">Headache</option>
            </select>
            <p className="text-red-500 text-sm">{errors.illnessCategory?.message}</p>
          </div>

          <div>
            <input
              type="number"
              {...register("illnessDays")}
              placeholder="Illness Duration (in days)"
              className="input"
            />
            <p className="text-red-500 text-sm">{errors.illnessDays?.message}</p>
          </div>

          <div className="col-span-2">
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
