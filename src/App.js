import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import statData from "./components/Statistics/data.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics data={statData} />
    </div>
  );
}

export default App;
