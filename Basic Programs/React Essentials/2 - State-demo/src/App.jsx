import "./App.css";
import "./index.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { SimpleCounter } from "./SimpleCounter";
import { PrevStateCounter } from "./PrevStateCounter";
import { UserProfile } from "./UserProfile";
import { ToDoList } from "./ToDoList";
import { ShoppingCart } from "./ShoppingCart";
import { CounterWithReducer } from "./CounterWithReducer";
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer";

function App() {
  return (
    <>
      <h1>State-Demo</h1>
      <ShoppingCartWithReducer />
      {/* <CounterWithReducer /> */}
      {/* <ShoppingCart /> */}
      {/* <ToDoList /> */}
      {/* <UserProfile /> */}
      {/* <PrevStateCounter />
      <SimpleCounter />
      <Counter />
      <LoginCard /> */}
    </>
  );
}

export default App;
