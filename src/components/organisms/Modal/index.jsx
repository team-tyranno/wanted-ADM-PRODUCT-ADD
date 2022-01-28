import React from 'react';
import { Button } from 'components';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function Modal({ text }) {
  return (
    <S.Background>
      <S.Container>
        <S.Buttons />
        <S.Body>{text}</S.Body>
        <S.Buttons>
          <Button text="취소" width="70px" />
          <Button text="확인" width="70px" />
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
};
