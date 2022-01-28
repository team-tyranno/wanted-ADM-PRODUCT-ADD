import React from 'react';
import * as S from './style';

export function InputImage() {
  return (
    <S.Wrapper>
      <label htmlFor="product-image">
        + 이미지 첨부
        <input id="product-image" type="file" accept="image/*" />
      </label>
    </S.Wrapper>
  );
}
