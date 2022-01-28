import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './style';

export function Button({ width, text, onClick }) {
  return (
    <Btn width={width} onClick={onClick}>
      {text}
    </Btn>
  );
}

Button.propTypes = {
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
};
