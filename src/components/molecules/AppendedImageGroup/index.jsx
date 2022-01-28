import React from 'react';
import { AppendedImage } from 'components';
import * as S from './style';

export function AppendedImageGroup() {
  return (
    <S.Container>
      <AppendedImage title="이미지 1.jpg" />
      <AppendedImage title="이미지 2.jpg" />
    </S.Container>
  );
}
