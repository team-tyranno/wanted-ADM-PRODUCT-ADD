import React from 'react';
import { ImageInput, FileList } from 'components';
import * as S from './style';

export function ImageAdder() {
  return (
    <S.Container>
      <ImageInput title="+ 이미지 추가" />
      <FileList />
    </S.Container>
  );
}
