import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function ImageInput({ title }) {
  return <S.Button>{title}</S.Button>;
}

ImageInput.propTypes = {
  title: PropTypes.string.isRequired,
};
