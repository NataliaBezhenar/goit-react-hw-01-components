import "./App.css";

import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Statistics from "./components/Statistics/Statistics";
import data from "./components/Statistics/data.json";

import friends from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList/FriendList";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={data} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
