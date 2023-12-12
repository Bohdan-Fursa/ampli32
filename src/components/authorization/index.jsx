import React, { useState } from "react";
export const Authorization = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  isAuthorized ? alert("Welcome user!") : alert("Authorize please");
  const Login = () => {
    setIsAuthorized(true);
  };
  const Logout = () => {
    setIsAuthorized(false);
  };
  return (
    <>
      <button onClick={Login}>Login In</button>
      <button onClick={Login}>Login Out</button>
    </>
  );
};
