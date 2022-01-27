import React from 'react';
import AddedFile from 'components/atoms/AddedFile';
import { FileListDiv } from './style';

export default function FileList() {
  return (
    <FileListDiv>
      <AddedFile title="이미지 1.jpg" />
      <AddedFile title="이미지 2.jpg" />
    </FileListDiv>
  );
}
