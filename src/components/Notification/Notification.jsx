import PropTypes from 'prop-types';
import '../Notification/Notification.css';

export function Notification({ message }) {
  return <p className="no_feedback">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string
};