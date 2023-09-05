import { useState } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbackStats = option => {
    setFeedback(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  const options = Object.keys(feedback);
  const total = Object.values(feedback).reduce((total, opt) => total + opt, 0);
  const positivePercentage =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={updateFeedbackStats}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            feedback={feedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>

      <GlobalStyle />
    </Layout>
  );
}
