import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="user avatar"
            width="48"
          ></img>
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
