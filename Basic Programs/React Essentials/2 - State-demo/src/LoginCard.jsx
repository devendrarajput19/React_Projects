import { useState } from "react";

export const LoginCard = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isloggedIn);
  };

  return (
    <button onClick={handleLogin}>{isloggedIn ? "Logout" : "Login"}</button>
  );
};
