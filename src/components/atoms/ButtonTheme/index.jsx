import React from 'react';
import { close } from 'assets';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function ButtonTheme({ text, onCheck }) {
  return (
    <S.ButtonWrapper>
      {text}
      <button type="button" onClick={onCheck}>
        <img src={close} alt="delete" />
      </button>
    </S.ButtonWrapper>
  );
}

ButtonTheme.propTypes = {
  text: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
};
