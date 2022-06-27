import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { Title, Btn, Text, Value, BtnWraper} from './Feedback.styled'

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


handleIncrement = (evt) => {
    console.log('click')
    console.log(evt.target)
}

    render () {
        return (
            <>
            <Title>Please leave feedback</Title>
            <BtnWraper>
            <Btn type="button" onClick={this.handleIncrement}>Good</ Btn>
            <Btn type="button" onClick={this.handleIncrement}>Neutral</Btn>
            <Btn type="button" onClick={this.handleIncrement}>Bad</Btn>
            </BtnWraper>
            <Title>Statistics</Title>
            <Text>Good: <Value>{this.state.good}</Value></Text>
            <Text>Neutral: <Value>{this.state.neutral}</Value></Text>
         <Text>Bad: <Value>0</Value>{this.state.bad}</Text>
            </>
        )
    }
}

export default Feedback


// Feedback.prototype = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     }
