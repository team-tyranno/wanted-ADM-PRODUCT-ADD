import React, { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { Item, Input } from 'components';
import * as S from './style';

export function GoodsName() {
  const [id, setId] = useState();
  const [value, setValue] = useState();

  const nanoid = customAlphabet('1234567890abcdef', 5);
  const onBlur = () => {
    if (value) setId(nanoid());
    else setId('');
  };
  const onChange = (e) => setValue(e.target.value);

  return (
    <>
      <Item title="상품명">
        <Input placeHolder="상품명을 입력해 주세요" onBlur={onBlur} onChange={onChange} />
      </Item>
      <Item title="상품 코드">
        <S.Id>{id}</S.Id>
      </Item>
    </>
  );
}
