import React from 'react';
import { BtnList, BtnItem, Btn } from './FeedbackOptions.styled';

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
