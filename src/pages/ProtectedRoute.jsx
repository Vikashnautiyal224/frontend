import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate } from "react-router-dom";
import PageLoading from "./pageLoading";

 const ProtectedRoute = ({ children }) => {
  const [user, isloading ] = useAuthState(auth);

  if (isloading) {
    return <PageLoading/>
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;