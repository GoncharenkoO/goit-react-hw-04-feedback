import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './notification.module.css';

function Notification({ message }) {
  return <p className={styles.message}>{message}</p>;
}

export default memo(Notification);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
