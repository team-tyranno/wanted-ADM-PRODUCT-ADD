import React from 'react';
import { Button } from 'components';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function Modal({ text, onClick }) {
  return (
    <S.Background>
      <S.Container>
        <S.Buttons />
        <S.Body>{text}</S.Body>
        <S.Buttons>
          <Button text="취소" width="70px" onClick={onClick} />
          <Button text="확인" width="70px" onClick={onClick} />
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
