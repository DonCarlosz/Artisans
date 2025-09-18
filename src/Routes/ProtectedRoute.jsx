import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // or a spinner while auth state is loading

  if (!user) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }

  return children;
};

export default ProtectedRoute;
