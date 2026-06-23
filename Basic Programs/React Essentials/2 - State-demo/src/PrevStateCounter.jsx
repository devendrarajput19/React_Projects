import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log("Count + 1: ", count);
    setCount((prev) => prev + 5);
    console.log("Count + 5: ", count);
    setCount((prev) => prev + 10);
    console.log("Count + 10: ", count);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// In this case, we are passing function in setCount, that store the previous state.
// Earlier we directly passed value, which does not store prev state
//
