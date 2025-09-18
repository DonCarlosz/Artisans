import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // optional: show spinner

  // If user is logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
