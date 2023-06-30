import React, { Component } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";

export default class Feedback extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
    }

    onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        const { good, neutral } = this.state;
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const result = ((good + neutral) / total) * 100;
        return Number(result.toFixed(2));
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
                <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)}  onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                <div>
                    <Section title="Statistics" >
                        {!total ? <Notification message="There is no feedback"></Notification> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>}
                    </Section>
                </div>
                </div>
    )
    }
}