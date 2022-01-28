import React from 'react';
import { PropTypes } from 'prop-types';
import CircleX from 'assets/icons/CircleX';
import * as S from './style';

export function AppendedImage({ title }) {
  return (
    <S.Container>
      <S.Span>{title}</S.Span>
      <CircleX />
    </S.Container>
  );
}

AppendedImage.propTypes = {
  title: PropTypes.string.isRequired,
};
