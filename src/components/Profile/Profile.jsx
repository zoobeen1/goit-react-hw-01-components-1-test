import PropTypes from 'prop-types';
import styled from './Profile.module.css';
export const Profile = ({ avatar, tag, username, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={styled.profile}>
      <div className={styled.description}>
        <img className={styled.avatar} src={avatar} alt={tag} />
        <p className={styled.name}>{username}</p>
        <p className={styled.tag}>@{tag}</p>
        <p className={styled.location}>{location}</p>
      </div>

      <ul className={styled.stats}>
        <li>
          <span className={styled.textLabel}>Followers</span>
          <span className={styled.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styled.textLabel}>Views</span>
          <span className={styled.quantity}>{views}</span>
        </li>
        <li>
          <span className={styled.textLabel}>Likes</span>
          <span className={styled.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
