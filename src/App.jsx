import React from 'react';
import { Category, Item, Button, GoodsName, ItemWithTwoCol } from './components';
import { BUTTON_SIZE } from './constants';

function App() {
  return (
    <Category title="상품 기본 정보">
      <Item title="카테고리">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <Button width={BUTTON_SIZE.MEDIUM} text="안녕" />
      </Item>
      <ItemWithTwoCol>
        <GoodsName />
      </ItemWithTwoCol>
    </Category>
  );
}

export default App;
