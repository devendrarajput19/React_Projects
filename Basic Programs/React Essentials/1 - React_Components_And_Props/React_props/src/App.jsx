import "./App.css";
import Welcome from "./Welcome";
import { Button } from "./Button";
import { Hello } from "./Hello";
import { UserProfile } from "./UserProfile";
import { CandidateProfile } from "./CandidateProfile";

function App() {
  return (
    <div>
      <h1>Hello React...</h1>
      <Welcome />
      <Button />
      <Hello />
      <UserProfile />
      <CandidateProfile />
    </div>
  );
}

export default App;
