import React from 'react';
import ImageInput from 'components/atoms/ImageInput';
import { ImageAddBox } from 'components/templates/Item/ImageAdder/style';
import FileList from 'components/organisms/FileList';

export default function ImageAdder() {
  return (
    <ImageAddBox>
      <ImageInput title="+ 이미지 추가" />
      <FileList />
    </ImageAddBox>
  );
}
