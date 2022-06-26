import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status"></span>
          <img className="avatar" src="" alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  name: PropTypes.string.isRequired,
};
