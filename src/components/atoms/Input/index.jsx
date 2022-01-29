import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inp } from './style';

export function Input({ width, placeHolder, onChange, onFocus, onBlur }) {
  return (
    <Container width={width}>
      <Inp placeholder={placeHolder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
    </Container>
  );
}

Input.defaultProps = {
  width: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
};

Input.propTypes = {
  width: PropTypes.string,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.oneOfType([null, PropTypes.func]),
  onFocus: PropTypes.oneOfType([null, PropTypes.func]),
  onBlur: PropTypes.oneOfType([null, PropTypes.func]),
};
