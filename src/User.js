// import ReactDom from 'react-dom';
// import paitingUsers from './user.json';

function User({ username, src, tag, location, avatar, stats }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={src} alt={tag} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{' ' + stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{' ' + stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{' ' + stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// const user = paitingUsers;
// console.log(user);

// ReactDom.render(
//   <User
//     username={user.username}
//     src={user.avatar}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector('#root'),
// );

export default User;
