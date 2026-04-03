import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <ToDoItem />
      </div>
    </center>
  );
}

export default App;
