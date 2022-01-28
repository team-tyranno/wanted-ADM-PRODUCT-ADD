import React from 'react';
import { InputImage, FileList } from 'components';
import * as S from './style';

export function ImageAdder() {
  return (
    <S.Container>
      <InputImage title="+ 이미지 추가" />
      <FileList />
    </S.Container>
  );
}
