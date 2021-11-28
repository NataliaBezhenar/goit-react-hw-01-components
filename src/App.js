import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./components/Statistics/data.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
