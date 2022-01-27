import React from 'react';
import { ImageWrapper } from './style';

export default function ProductOptionImage() {
  return (
    <ImageWrapper>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="product-image">+ 이미지 첨부</label>
      <input id="product-image" type="file" accept="image/*" />
    </ImageWrapper>
  );
}
