import "./App.css";
import ClockDetails from "./components/ClockDetails";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockDetails></ClockDetails>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
