import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    
  <ul className="feedback-list">
    {options.map((option, index) => (
      <li className="feedback-item" key={index}>
        <button
          type="button"
          className={`${"feedback__btn"} ${"feedback__"+option}`}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </li>  
      ))
    }
    </ul>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;