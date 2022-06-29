import PropTypes from 'prop-types';
import styles from '../FriendList.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.image} src={avatar} alt="User avatar" width="48" />
      <p className={styles.text}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
