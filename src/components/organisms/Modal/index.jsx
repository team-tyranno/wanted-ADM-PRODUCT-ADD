import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import * as S from './style';

export function Modal({ content, onClick }) {
  return (
    <S.Background>
      <S.Container>
        <S.Buttons />
        <S.Body>{content}</S.Body>
        <S.Buttons>
          <Button content="확인" width="70px" onClick={onClick} />
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
}

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
