import React from 'react';
import { PropTypes } from 'prop-types';
import CircleX from 'assets/icons/CircleX';
import * as S from './style';

export function AppendedImage({ title, onDelete }) {
  return (
    <S.Container>
      <S.Span>{title}</S.Span>
      <CircleX onDelete={onDelete} />
    </S.Container>
  );
}

AppendedImage.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
