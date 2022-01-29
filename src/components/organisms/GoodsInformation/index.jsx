import React from 'react';
import { Input } from 'components';
import * as S from './style';

export function GoodsInformation() {
  return (
    <S.Container>
      <Input title="상품 구성 소개 정보를 입력해 주세요" />
    </S.Container>
  );
}
