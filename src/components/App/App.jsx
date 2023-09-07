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
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const options = Object.keys(feedback);
  const total = Object.values(feedback).reduce((acc, value) => acc + value, 0);
  const positivePercentage =
    feedback.good > 0 ? Math.round((feedback.good / total) * 100) : 0;

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

// useReducer
// import { useReducer } from 'react';

// import { Statistics } from 'components/Statistics/Statistics';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Section } from 'components/Section/Section';
// import { Notification } from 'components/Notification/Notification';

// import { Layout } from 'components/Layout';
// import { GlobalStyle } from 'components/GlobalStyle';

// function reducer(prevState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case 'good':
//       return { ...prevState, good: prevState.good + payload };
//     case 'neutral':
//       return { ...prevState, neutral: prevState.neutral + payload };
//     case 'bad':
//       return { ...prevState, bad: prevState.bad + payload };
//     default:
//       return console.log(`Unsupported type - ${type}`);
//   }
// }

// export function App() {
//   const [state, dispatch] = useReducer(reducer, {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const updateFeedbackStats = option => {
//     dispatch({ type: option, payload: 1 });
//   };

//   const options = Object.keys(state);
//   const total = Object.values(state).reduce((acc, value) => acc + value, 0);
//   const positivePercentage =
//     state.good > 0 ? Math.round((state.good / total) * 100) : 0;

//   return (
//     <Layout>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={options}
//           onLeaveFeedback={updateFeedbackStats}
//         />
//       </Section>

//       <Section title="Statistics">
//         {total > 0 ? (
//           <Statistics
//             feedback={state}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback yet" />
//         )}
//       </Section>

//       <GlobalStyle />
//     </Layout>
//   );
// }
