import "./App.css";

function Welcome() {
  return <h2> Welcome Devendra...</h2>;
}
function Button() {
  return <button>Click here...</button>;
}
function App() {
  return (
    <div>
      <h1>Hello React...</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
