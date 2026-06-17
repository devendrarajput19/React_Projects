import { useState } from "react";

export const LoginCard = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(!isloggedIn);
  };

  // we will use target property of event to get the value
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <button onClick={handleLogin}>{isloggedIn ? "Logout" : "Login"}</button>
      <div>
        <input
          type="text"
          placeholder="Type a message... "
          value={message}
          onChange={handleChange}
        />
        <p>{message}</p>
      </div>
    </>
  );
};
