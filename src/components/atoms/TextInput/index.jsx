import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Label, Input } from 'components/atoms/TextInput/style';

export default function TextInput({ label, placeholder }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
    </Container>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  label: null,
};
