import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function InputImage({ onChange }) {
  return (
    <S.Wrapper>
      <label htmlFor="product-image">
        + 이미지 첨부
        <input id="product-image" type="file" accept="image/*" onChange={onChange} />
      </label>
    </S.Wrapper>
  );
}

InputImage.propTypes = {
  onChange: PropTypes.func.isRequired,
};
