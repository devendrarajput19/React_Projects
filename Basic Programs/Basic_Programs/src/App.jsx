import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
//
function App() {
  let footitems = ["Dal", "Green Vegetables", "Roti", "Salad"];

  return (
    <>
      <h1>Healthy Food...</h1>
      <ErrorMessage items={footitems}></ErrorMessage>
      <FoodItems items={footitems}></FoodItems>
    </>
  );
}

// <> is called Fragment. Only one data can be return, so either we add div and return value or we use fragment
// map method is used to render list from array data. It works like loop.
// key={item} that is the unique name we provide. In this case we have used our item name as unique value.

export default App;
