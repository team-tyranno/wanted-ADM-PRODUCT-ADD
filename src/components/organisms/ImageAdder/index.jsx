import React from 'react';
import { FileList, InputImage } from 'components';
import * as S from './style';

export function ImageAdder() {
  return (
    <S.Container>
      <InputImage />
      <FileList />
    </S.Container>
  );
}
