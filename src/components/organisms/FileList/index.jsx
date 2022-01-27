import React from 'react';
import { AddedFile } from 'components';
import * as S from './style';

export function FileList() {
  return (
    <S.Container>
      <AddedFile title="이미지 1.jpg" />
      <AddedFile title="이미지 2.jpg" />
    </S.Container>
  );
}
