import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function Input({ width, placeHolder, onChange, onFocus, onBlur }) {
  return (
    <S.Container width={width}>
      <S.Inp placeholder={placeHolder} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
    </S.Container>
  );
}

Input.defaultProps = {
  width: null,
  placeHolder: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
};

Input.propTypes = {
  width: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.oneOfType([null, PropTypes.func]),
  onFocus: PropTypes.oneOfType([null, PropTypes.func]),
  onBlur: PropTypes.oneOfType([null, PropTypes.func]),
};
