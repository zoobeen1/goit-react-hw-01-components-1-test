import PropTypes from 'prop-types';
import styled from '../FriendList.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={styled.item}>
      <span
        className={styled.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={styled.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
