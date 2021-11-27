import s from "./Profile.module.css";

function Profile({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div className="profile" key={user.tag}>
          <div className="description">
            <img
              src={user.avatar}
              alt="User avatar"
              className="avatar"
              width="100"
            ></img>
            <p className="name">{user.username}</p>
            <p className="tag">@{user.tag}</p>
            <p className="location">{user.location}</p>
          </div>
          <ul className="stats">
            <li>
              <span className="label">Followers</span>
              <span className="quantity">{user.stats.followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{user.stats.views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{user.stats.likes}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Profile;
