import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function Input({ placeHolder, width, onChange, onBlur }) {
  return (
    <S.Container width={width}>
      <S.Inp placeholder={placeHolder} onChange={onChange} onBlur={onBlur} />
    </S.Container>
  );
}

Input.defaultProps = {
  width: null,
  onBlur: null,
  onChange: null,
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  width: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};
