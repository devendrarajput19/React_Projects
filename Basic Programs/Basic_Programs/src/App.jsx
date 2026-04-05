import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//
function App() {
  let footitem = [];
  //let footitem = ["Dal", "Green Vegetables", "Roti", "Salad"];

  // if (footitem.length === 0) {
  //   return <h3> I am still hungry...</h3>;
  // }
  // Adding Ternary condition below
  return (
    <>
      <h1>Healthy Food...</h1>
      {footitem.length === 0 ? <h3>I am still Hungry...</h3> : null}
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

// <> is called Fragment. Only one data can be return, so either we add div and return value or we use fragment
// map method is used to render list from array data. It works like loop.
// key={item} that is the unique name we provide. In this case we have used our item name as unique value.

export default App;
