import "./App.css";
import "./index.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { SimpleCounter } from "./SimpleCounter";

function App() {
  return (
    <>
      <h1>State-Demo</h1>
      <SimpleCounter />
      <Counter />
      <LoginCard />
    </>
  );
}

export default App;
