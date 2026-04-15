import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};

export default ToDoItems;

// Above map method is used to fetch the data from Array list which is passed as props
