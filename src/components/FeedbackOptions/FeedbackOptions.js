import React from 'react';
import { BtnWraper, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  options: { handleGoodIncrement, handleNeutralIncrement, handleBadIncrement },
  onLeaveFeedback,
}) => {
  return (
    <>
      <BtnWraper>
        <Btn
          type="button"
          onMouseDown={onLeaveFeedback}
          onClick={handleGoodIncrement}
        >
          Good
        </Btn>
        <Btn
          type="button"
          onMouseDown={onLeaveFeedback}
          onClick={handleNeutralIncrement}
        >
          Neutral
        </Btn>
        <Btn
          type="button"
          onMouseDown={onLeaveFeedback}
          onClick={handleBadIncrement}
        >
          Bad
        </Btn>
      </BtnWraper>
    </>
  );
};

export default FeedbackOptions;
