import React from 'react';
import { UploaderWrapper } from './style';

export function ImageUploader() {
  return (
    <UploaderWrapper>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="product-image">+ 이미지 첨부</label>
      <input id="product-image" type="file" accept="image/*" />
    </UploaderWrapper>
  );
}
