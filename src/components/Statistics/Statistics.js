import { Text, Value, } from './Statistics.styled.jsx';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return (
    <>
    <Text>
      Good: <Value>{good}</Value>
    </Text>
    <Text>
      Neutral: <Value>{neutral}</Value>
    </Text>
    <Text>
      Bad: <Value>{bad}</Value>
    </Text>
    <Text>
      Total: <Value>{total}</Value>
    </Text>
    <Text>
      Positive feedback: <Value>{positivePercentage ? positivePercentage : 0 }%</Value>
    </Text>
    </>
   )
}

export default Statistics

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};