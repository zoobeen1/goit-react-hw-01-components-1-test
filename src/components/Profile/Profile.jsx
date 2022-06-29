import PropTypes from 'prop-types';
import stayles from './Profile.module.css';
export const Profile = ({ avatar, tag, username, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={stayles.profile}>
      <div className={stayles.description}>
        <img className={stayles.avatar} src={avatar} alt={tag} />
        <p className={stayles.name}>{username}</p>
        <p className={stayles.tag}>@{tag}</p>
        <p className={stayles.location}>{location}</p>
      </div>

      <ul className={stayles.stats}>
        <li>
          <span className={stayles.textLabel}>Followers</span>
          <span className={stayles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={stayles.textLabel}>Views</span>
          <span className={stayles.quantity}>{views}</span>
        </li>
        <li>
          <span className={stayles.textLabel}>Likes</span>
          <span className={stayles.quantity}>{likes}</span>
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
