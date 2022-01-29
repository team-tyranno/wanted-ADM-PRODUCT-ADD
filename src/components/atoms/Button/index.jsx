import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './style';

export function Button({ width, height, text, onClick }) {
  return (
    <Btn width={width} height={height} onClick={onClick}>
      {text}
    </Btn>
  );
}

Button.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
  height: null,
};
