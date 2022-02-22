import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './shared/Section';
import Notification from './shared/Notification';

const initalState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const Feedback = () => {
  const [state, setState] = useState({ ...initalState });
  const addFeedback = property => {
    setState(prevState => {
      const value = prevState[property];
      return {
        ...prevState,
        [property]: value + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const value = state.good + state.neutral + state.bad;
    return value;
  };

  const countPositiveFeedbackPercentage = () => {
    const persentage =
      Math.round((state.good / countTotalFeedback()) * 100) || 0;
    if (persentage === 0) {
      return 0;
    }
    return persentage;
  };

  const { good, neutral, bad } = state;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
