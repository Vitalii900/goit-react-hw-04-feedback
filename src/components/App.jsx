import { useState } from 'react';
import { Section } from '../components/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import '../components/App.css';

const options = ['good', 'neutral', 'bad'];

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1)
        break;

      default:
        console.log('Something wrong')
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    if (good === 0) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
  };

    return (
      <div className="container">
        <Section title={'feedback'}>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Section title={'statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        )}
      </div>
    );
}
