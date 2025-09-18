import React, { useEffect } from "react";
import { asset } from "../Images/asset";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // Simulate app loading (replace with real data fetching if needed)
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds preloader

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-primary relative overflow-hidden">
      {/* Pulsing White Circle */}
      <div className="absolute w-20 h-20 bg-white rounded-full animate-pulse-scale"></div>

      {/* Logo */}
      <img
        src={asset.logo} // Replace with your logo path
        alt="Logo"
        className="z-10 w-8 h-8"
      />

      {/* Keyframes animation */}
      <style>
        {`
          @keyframes pulseScale {
            0% { transform: scale(0); }
            25% { transform: scale(1.5); }
            50% { transform: scale(1); }
            75% { transform: scale(1.5); }
            100% { transform: scale(1); }
          }

          .animate-pulse-scale {
            animation: pulseScale 3s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
