import { BtnList, BtnItem, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnList>
      {options.map(option => (
        <BtnItem key={option}>
          <Btn
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Btn>
        </BtnItem>
      ))}
      </BtnList>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};