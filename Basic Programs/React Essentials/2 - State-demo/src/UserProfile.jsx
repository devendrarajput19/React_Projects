import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Devendra",
    age: 34,
    email: "deven1234@gmail.com",
  });

  console.log("Component Rendering user: ", { user });

  const updateName = () => {
    setUser({
      name: "Dev",
    });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateName}>Change name to Dev</button>
    </div>
  );
};

// In this case, only name gets updated as complete user object is replaced by setState.
// So we have to use spread operator to copy the other fields as well and then update
