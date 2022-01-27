import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './style';

export function Button({ width, text }) {
  return <Btn width={width}>{text}</Btn>;
}

Button.propTypes = {
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
