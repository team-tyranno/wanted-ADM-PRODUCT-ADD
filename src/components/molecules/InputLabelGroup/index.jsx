import React from 'react';
import { Input } from 'components';
import { PropTypes } from 'prop-types';
import * as S from './style';

export function InputLabelGroup({ title, placeHolder }) {
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <Input width="70%" placeHolder={placeHolder} />
    </S.Container>
  );
}

InputLabelGroup.propTypes = {
  title: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
};
