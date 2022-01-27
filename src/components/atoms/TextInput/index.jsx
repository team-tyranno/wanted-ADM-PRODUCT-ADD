import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function TextInput({ label, placeholder }) {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Input placeholder={placeholder} />
    </S.Container>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  label: null,
};
