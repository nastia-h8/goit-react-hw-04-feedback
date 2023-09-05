import { RawData, CountData, Item, Label } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <RawData>
        <Item>
          <Label>Good</Label>
          <span>{good}</span>
        </Item>
        <Item>
          <Label>Neutral</Label>
          <span>{neutral}</span>
        </Item>
        <Item>
          <Label>Bad</Label>
          <span>{bad}</span>
        </Item>
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
