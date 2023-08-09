// import React, { Component } from "react";
// import Section from "components/Section/Section";
// import Statistics from "components/Statistics/Statistics";
// import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
// import Notification from "components/Notification/Notification";

// export default class Feedback extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//     }

//     onLeaveFeedback = (propertyName) => {
//         this.setState((prevState) => {
//             const value = prevState[propertyName];
//             return {
//                 [propertyName]: value + 1
//             }
//         })
//     }

//     countTotalFeedback() {
//         //const { good, neutral, bad } = this.state;
//         //return good + neutral + bad;
//         return Object.values(this.state).reduce((acc, number) => acc + number, 0);
//     }

//     countPositiveFeedbackPercentage() {
//         // const { good, neutral } = this.state;
//         // const total = this.countTotalFeedback();
//         // if (!total) {
//         //     return 0;
//         // }
//         // const result = ((good + neutral) / total) * 100;
//         // //return Number(result.toFixed(2));
//         // return Number(Math.trunc(result));

//         return Math.round(
//             (this.state.good * 100) / (this.countTotalFeedback() || 1)
//           );
//     }

//     render() {
//         const { good, neutral, bad } = this.state;
//         const total = this.countTotalFeedback();
//         const positivePercentage = this.countPositiveFeedbackPercentage();
//         return (
//                 <div>
//                 <Section title="Please leave feedback">
//                     <FeedbackOptions options={Object.keys(this.state)}  onLeaveFeedback={this.onLeaveFeedback}/>
//                 </Section>
//                 <div>
//                     <Section title="Statistics" >
//                         {!total ? <Notification message="There is no feedback"></Notification> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>}
//                     </Section>
//                 </div>
//                 </div>
//     )
//     }
// }

import React, { useState } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = (propertyName) => {
    setFeedback((prevState) => ({
      ...prevState,
      [propertyName]: prevState[propertyName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, number) => acc + number, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good * 100) / (countTotalFeedback() || 1));
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <div>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    </div>
  );
};

export default Feedback;
