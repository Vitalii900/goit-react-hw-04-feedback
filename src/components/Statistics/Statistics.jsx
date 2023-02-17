import PropTypes from 'prop-types';
import '../Statistics/Statistics.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      <div className="statistics">
        <p className="stat stat_good">Good: {good}</p>
        <p className="stat stat_neutral">Neutral: {neutral}</p>
        <p className="stat stat_bad">Bad: {bad}</p>
        <p className="stat stat_total">Total: {total()}</p>
        <p className="stat stat_positive">
          Positive feedback: {positivePercentage()} %
        </p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
