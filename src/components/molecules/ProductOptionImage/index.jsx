import React, { useState } from 'react';
import { InputImage } from 'components';
import * as S from './style';

export function ProductOptionImage() {
  const [imageTempURL, setImageTempURL] = useState('');

  const uploadImage = (event) => {
    const image = event.target.files;
    const tempURL = URL.createObjectURL(image[0]);

    if (image[0].type.includes('image')) {
      setImageTempURL(tempURL);
    } else {
      alert(`Please check your file again.`);
    }
  };

  return (
    <S.Wrapper style={{ backgroundImage: `url(${imageTempURL})` }}>
      <InputImage onChange={uploadImage} />
    </S.Wrapper>
  );
}
