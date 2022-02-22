import PropTypes from 'prop-types';
import styles from './notification.module.css';

function Notification({ message }) {
  // console.log('Render');
  return <p className={styles.message}>{message}</p>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
