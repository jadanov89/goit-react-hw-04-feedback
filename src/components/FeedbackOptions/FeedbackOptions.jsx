import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
    console.log(options);
  return (
      <ButtonWrapper>
          {options.map((name) => (
              <Button key={name} type='button' onClick={() => onLeaveFeedback(name)}>{name}</Button>
          ))}
      </ButtonWrapper>
  )
}

FeedbackOptions.protoType = {
    "onLeaveFeedback": PropTypes.func,
};