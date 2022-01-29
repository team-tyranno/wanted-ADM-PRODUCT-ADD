import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components';
import * as S from './style';

export function GoodsInformation({ handleChange }) {
  return (
    <S.Container>
      <Input
        title="상품 구성 소개 정보를 입력해 주세요"
        onChange={(e) => handleChange({ goodsDescription: e.target.value })}
      />
    </S.Container>
  );
}

GoodsInformation.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
