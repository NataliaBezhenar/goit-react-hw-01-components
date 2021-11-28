import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./components/Statistics/data.json";

import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
