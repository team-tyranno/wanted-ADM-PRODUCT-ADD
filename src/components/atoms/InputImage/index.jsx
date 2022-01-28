import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function InputImage({ title }) {
  return <S.Button>{title}</S.Button>;
}

InputImage.propTypes = {
  title: PropTypes.string.isRequired,
};
