import PropTypes from 'prop-types';
import styled from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styled.listItem}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
