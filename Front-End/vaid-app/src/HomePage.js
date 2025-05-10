// pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome</h1>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/patient-register")}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            New Patient Register
          </button>

          <button
            onClick={() => navigate("/existing-patients")}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Existing Patient Records
          </button>

          <div className="mt-4 p-4 border rounded bg-gray-100 text-sm text-left">
            <strong>Need any assistance?</strong>
            <p>Contact support team or visit help section.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
