import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Count + 1: ", count);
    setCount(count + 5);
    console.log("Count + 5: ", count);
    setCount(count + 10);
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

// Previous state is not maintain, so the value of count will be 10.
// Also in Console log, count will be 0 for all the three setCount, because function is triggered. Not re-rendered
