// pages/SuccessPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Success!</h2>
        <p className="text-gray-700 mb-4">Your details have been saved successfully.</p>
        <p className="text-gray-600 mb-6">The Vaidya Admin will contact you shortly.</p>
        <button
          onClick={() => navigate("/HomePage")}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
