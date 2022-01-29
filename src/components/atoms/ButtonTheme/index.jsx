import React from 'react';
import PropTypes from 'prop-types';
import { close } from 'assets';
import * as S from './style';

export function ButtonTheme({ text, onCheck }) {
  return (
    <S.Wrapper>
      {text}
      <button type="button" onClick={onCheck}>
        <img src={close} alt="delete" />
      </button>
    </S.Wrapper>
  );
}

ButtonTheme.propTypes = {
  text: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
};
