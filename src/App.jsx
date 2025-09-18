import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./Pages/Notfound";
import SignUp from "./Pages/SignUp";
import MessageSection from "./Pages/MessageSection";
import SplashScreen from "./Pages/SplashScreen";
import LoginPage from "./Pages/LoginPage";
import Onboarding from "./Pages/Onboarding";
import ProtectedRoute from "./Routes/ProtectedRoute"; // Protected wrapper
import PublicRoute from "./Routes/PublicRoute"; // Public wrapper
import Home from "./Pages/Home";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          {/* Public Routes */}
          <Route
            index
            element={
              <PublicRoute>
                <Onboarding />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/message"
            element={
              <ProtectedRoute>
                <MessageSection />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
