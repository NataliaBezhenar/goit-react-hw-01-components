import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

function App() {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
}

export default App;
