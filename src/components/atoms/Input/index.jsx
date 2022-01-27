import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inp } from './style';

export function Input({ placeHolder, onChange, onBlur }) {
  return (
    <Container>
      <Inp placeholder={placeHolder} onChange={onChange} onBlur={onBlur} />
    </Container>
  );
}

Input.defaultProps = {
  onChange: null,
  onBlur: null,
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.oneOfType([null, PropTypes.func]),
  onBlur: PropTypes.oneOfType([null, PropTypes.func]),
};
