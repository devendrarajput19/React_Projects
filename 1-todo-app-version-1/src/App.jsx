import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  // created Array List

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/15/2026",
    },
    {
      name: "Prepare Food",
      dueDate: "4/15/2026",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
