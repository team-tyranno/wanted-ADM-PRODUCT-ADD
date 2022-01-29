import React from 'react';
import PropTypes from 'prop-types';
import { customAlphabet } from 'nanoid';
import { Item, Input } from 'components';
import * as S from './style';

export function GoodsName({ formStates, handleChange }) {
  const nanoid = customAlphabet('1234567890abcdef', 5);

  const onChange = (e) => handleChange({ value: e.target.value });
  const onBlur = () => {
    handleChange({
      id: formStates.value ? nanoid() : '',
    });
  };

  return (
    <>
      <Item title="상품명">
        <Input placeHolder="상품명을 입력해 주세요" onChange={onChange} onBlur={onBlur} />
      </Item>
      <Item title="상품 코드">
        <S.Id>{formStates.id}</S.Id>
      </Item>
    </>
  );
}

GoodsName.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formStates: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
