import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class Feedback extends Component {
  static defaultProps = {
    initialvalueGood: 0,
  };

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
    setTimeout(() => {
      evt.target.style.backgroundColor = '#ffffffff';
    }, 100);
  };

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
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good / this.countTotalFeedback();
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback" />

        <FeedbackOptions
          options={{
            handleGoodIncrement: this.handleGoodIncrement,
            handleNeutralIncrement: this.handleNeutralIncrement,
            handleBadIncrement: this.handleBadIncrement,
          }}
          onLeaveFeedback={this.handleBtnMouseDownChangeColor}
        />

        <Section title="Statistics" />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default Feedback;

