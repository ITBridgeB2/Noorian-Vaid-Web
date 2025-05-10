// pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <img src="/logo.png" alt="Logo" className="h-20 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Welcome to Vaidyothiya Shayada Portal</h1>
        <p className="text-gray-600 mb-6">Best Website for Healthcare Assistance</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/RegisterPage")}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/LoginPage")}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
