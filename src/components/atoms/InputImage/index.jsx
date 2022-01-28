import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as S from './style';

export function InputImage({ onChange }) {
  const idx = nanoid().toString();
  return (
    <S.Wrapper>
      <label htmlFor={idx}>
        + 이미지 첨부
        <input id={idx} type="file" accept="image/*" onChange={onChange} />
      </label>
    </S.Wrapper>
  );
}

InputImage.propTypes = {
  onChange: PropTypes.func.isRequired,
};
