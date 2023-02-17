import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className="list">
      {options.map(option => (
        <li key={option}>
          <button
            className="button"
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
