import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { Title, Btn, Text, Value, BtnWraper } from './Feedback.styled';

class Feedback extends Component {

    static defaultProps = {
        initialvalueGood: 0
    }

  state = {
    // good: 0,
    good: this.props.initialvalueGood,
    neutral: 0,
    bad: 0,
  };

  handleGoodIncrement = evt => {
    this.setState(currentState => ({
      good: currentState.good + 1,

    }));

  };

  handleBtnMouseDownChangeColor = evt => {
    evt.target.style.backgroundColor = '#1E90FF';
    setTimeout(()=>{evt.target.style.backgroundColor = '#ffffffff';}, 100)
  }



  handleNeutralIncrement = evt => {
    this.setState(currentState => ({
      neutral: currentState.neutral + 1,
    }));
  };

  handleBadIncrement = evt => {
    this.setState(currentState => ({
      bad: currentState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
   return this.state.good / this.countTotalFeedback() 
}

  render() {
    return (
      <>
        <Title>Please leave feedback</Title>
        <BtnWraper>
          <Btn type="button" onMouseDown={this.handleBtnMouseDownChangeColor} onClick={this.handleGoodIncrement}>
            Good
          </Btn>
          <Btn type="button" onMouseDown={this.handleBtnMouseDownChangeColor} onClick={this.handleNeutralIncrement}>
            Neutral
          </Btn>
          <Btn type="button" onMouseDown={this.handleBtnMouseDownChangeColor} onClick={this.handleBadIncrement}>
            Bad
          </Btn>
        </BtnWraper>
        <Title>Statistics</Title>
        <Text>
          Good: <Value>{this.state.good}</Value>
        </Text>
        <Text>
          Neutral: <Value>{this.state.neutral}</Value>
        </Text>
        <Text>
          Bad: <Value>{this.state.bad}</Value>
        </Text>
        <Text>
          Total: <Value>{this.countTotalFeedback()}</Value>
        </Text>
        <Text>
          Positive feedback: <Value>{this.countPositiveFeedbackPercentage() ? Math.round( this.countPositiveFeedbackPercentage() * 100) : 0 }%</Value>
        </Text>
      </>
    );
  }
}

export default Feedback;

// Feedback.prototype = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     }
