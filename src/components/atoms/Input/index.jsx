import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inp } from './style';

export function Input({ placeHolder }) {
  return (
    <Container>
      <Inp placeholder={placeHolder} />
    </Container>
  );
}

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
};
