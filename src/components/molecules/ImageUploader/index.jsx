import React from 'react';
import { InputImage } from 'components/atoms/InputImage';
import { UploaderWrapper } from './style';

export function ImageUploader() {
  return (
    <UploaderWrapper>
      <InputImage />
    </UploaderWrapper>
  );
}
