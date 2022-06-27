import React from "react";
import { Title, Text, Value, } from './Statistics.styled.jsx';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return (
    <>
    <Title>Statistics</Title>
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
      Positive feedback: <Value>{positivePercentage ? Math.round(positivePercentage * 100) : 0 }%</Value>
    </Text>
    </>
   )
}

export default Statistics

