import React from 'react';
import { ButtonDelete, ProductOptionImage, ProductOptionDetail, ButtonAppend } from 'components';
import * as S from './style';

export function ProductOption() {
  return (
    <S.Wrapper>
      <div className="delete-set">
        <ButtonDelete width="70px" height="35px" />
      </div>

      <ProductOptionImage />
      <ProductOptionDetail />

      <div className="append-option">
        <ButtonAppend width="100%" height="54px" content="+ 옵션 추가" />
      </div>
    </S.Wrapper>
  );
}
