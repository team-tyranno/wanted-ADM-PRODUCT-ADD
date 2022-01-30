import React from 'react';
import { ButtonDelete, ProductOptionImage, ProductOptionDetail, ButtonAppend } from 'components';
import * as S from './style';

export function ProductOption() {
  return (
    <S.Container>
      <span className="default-text">옵션세트를 추가하여 옵션을 구성해 주세요.</span>

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
    </S.Container>
  );
}
