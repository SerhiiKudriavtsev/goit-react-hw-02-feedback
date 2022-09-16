import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, countTotal, countPercentage }) => {
  return (
    <ul className="statistics__list">
      <li className="statistics__item">
        <p className="statistics__text"> Good: {good} 🤩</p>
      </li>
      <li className="statistics__item">
        <p className="statistics__text"> Neutral: {neutral} 🤔</p>
      </li>
      <li className="statistics__item">
        <p className="statistics__text"> Bad: {bad} 😥</p>
      </li>
      <li className="statistics__item">
        <h3 className="statistics__title">Total: {countTotal}</h3>
      </li>
      <li className="statistics__item">
        <h3 className="statistics__title">
          Positive feedback: {countPercentage}%
        </h3>
      </li>
    </ul>
  );
}
  
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotal: PropTypes.number.isRequired,
  countPercentage: PropTypes.number.isRequired,
};

export default Statistics;