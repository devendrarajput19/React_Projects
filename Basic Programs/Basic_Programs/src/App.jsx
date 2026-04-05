import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let footitem = ["Dal", "Green Vegetables", "Roti", "Salad"];

  return (
    <>
      <h1>Healthy Food...</h1>
      <ul className="list-group">
        {footitem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// <> is called Fragment
// map method is used to render list from array data. It works like loop.
// key={item} that is the unique name we provide. In this case we have used our item name as unique value.

export default App;
