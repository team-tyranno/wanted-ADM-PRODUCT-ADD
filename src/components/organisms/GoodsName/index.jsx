import React, { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { Item } from '../../templates/Item';
import { Input } from '../../atoms/Input';
import { Id } from './style';

export function GoodsName() {
  const [id, setId] = useState();
  const [value, setValue] = useState();
  const nanoid = customAlphabet('1234567890abcdef', 5);

  const onChange = (e) => setValue(e.target.value);
  const onBlur = () => {
    if (value) setId(nanoid());
    else setId('');
  };

  return (
    <>
      <Item title="상품명">
        <Input placeHolder="상품명을 입력해 주세요" onChange={onChange} onBlur={onBlur} />
      </Item>
      <Item title="상품 코드">
        <Id>{id}</Id>
      </Item>
    </>
  );
}
