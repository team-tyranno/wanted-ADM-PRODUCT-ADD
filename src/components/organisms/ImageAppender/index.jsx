import React from 'react';
import { InputImage, AppendedImageGroup } from 'components';
import * as S from './style';

export function ImageAppender() {
  return (
    <S.Container>
      <InputImage title="+ 이미지 추가" />
      <AppendedImageGroup />
    </S.Container>
  );
}
