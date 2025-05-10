// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./LandingPage";
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";
// import ForgotPassword from "./ForgotPassword";
// import HomePage from "./HomePage";
// import PatientRegisterPage from "./PatientRegisterPage";
// import SuccessPage from "./SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/patient-register" element={<PatientRegisterPage />} />
        <Route path="/success" element={<SuccessPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

