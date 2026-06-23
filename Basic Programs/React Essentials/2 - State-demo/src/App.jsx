import "./App.css";
import "./index.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { UserProfile } from "./UserProfile";

function App() {
  return (
    <>
      <h1>State-Demo</h1>
      <UserProfile />
      {/* <PrevStateCounter />
      <SimpleCounter />
      <Counter />
      <LoginCard /> */}
    </>
  );
}

export default App;
