import React from "react";

const Statistics = () => {
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
}

export default Statistics