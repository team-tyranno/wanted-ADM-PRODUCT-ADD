import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inp } from './style';

export function Input({ width, placeHolder, onChange, onBlur }) {
  return (
    <Container width={width}>
      <Inp placeholder={placeHolder} onChange={onChange} onBlur={onBlur} />
    </Container>
  );
}

Input.defaultProps = {
  width: null,
  placeHolder: null,
  onChange: null,
  onBlur: null,
};

Input.propTypes = {
  width: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
