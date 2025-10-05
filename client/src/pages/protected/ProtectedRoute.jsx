import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const storedUser = localStorage.getItem("user");

  if (!isLoggedIn && !storedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

