import { useState } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedbackStats = option => {
    switch (option) {
      case 'good':
        setGood(prevCount => prevCount + 1);
        return;
      case 'neutral':
        setNeutral(prevCount => prevCount + 1);
        return;
      case 'bad':
        setBad(prevCount => prevCount + 1);
        return;
      default:
        throw new Error(`unsupported feedback option ${option}`);
    }
  };

  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

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
            good={good}
            neutral={neutral}
            bad={bad}
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
