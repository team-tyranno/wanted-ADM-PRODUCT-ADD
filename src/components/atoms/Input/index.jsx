import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inp } from './style';

export function Input({ placeHolder, onChange, onFocus, onBlur }) {
  return (
    <Container>
      <Inp placeholder={placeHolder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
    </Container>
  );
}

Input.defaultProps = {
  onChange: null,
  onFocus: null,
  onBlur: null,
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.oneOfType([null, PropTypes.func]),
  onFocus: PropTypes.oneOfType([null, PropTypes.func]),
  onBlur: PropTypes.oneOfType([null, PropTypes.func]),
};
