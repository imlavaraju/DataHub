import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const isAuthenticated = Cookies.get("token"); // Check if user is authenticated

  return isAuthenticated == undefined ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoute;
