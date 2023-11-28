import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const { user, isloading } = useAuthState(auth);
  if (isloading){
    console.log('loading....')
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
