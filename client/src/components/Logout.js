import React from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { loggedIn, setUser, setLoggedIn } = useUser();
  const logoutHelper = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
        setLoggedIn(false);
      } else {
        throw new Error("unable to logout");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (loggedIn) {
    logoutHelper();
  }

  return <Navigate to="/" />;
};

export default Logout;
