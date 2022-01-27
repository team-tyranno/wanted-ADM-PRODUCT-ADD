import React from 'react';
import { Item } from '../../templates/Item';
import { Input } from '../../atoms/Input';

export function GoodsName() {
  return (
    <>
      <Item title="상품명">
        <Input placeHolder="상품명을 입력해 주세요" style={{ lineHeight: '50px' }} />
      </Item>
      <Item title="상품 코드">
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          안녕하세요
        </div>
      </Item>
    </>
  );
}
