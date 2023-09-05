import { RawData, CountData, Item, Label } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ feedback, total, positivePercentage }) {
  const entries = Object.entries(feedback);

  return (
    <>
      <RawData>
        {entries.map(option => {
          const [label, value] = option;
          return (
            <Item key={label}>
              <Label>{label}</Label>
              <span>{value}</span>
            </Item>
          );
        })}
      </RawData>

      <CountData>
        <li>
          <Label>Total feedback: </Label>
          <span>{total}</span>
        </li>
        <li>
          <Label>Positive feedback: </Label>
          <span>{`${positivePercentage}%`}</span>
        </li>
      </CountData>
    </>
  );
}

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
