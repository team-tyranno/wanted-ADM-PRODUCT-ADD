import React from 'react';
import { Category, Item, Input, Button } from './components';
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
        <Input placeHolder="dsfsv" />
        <Button width={BUTTON_SIZE.MEDIUM} text="안녕" />
      </Item>
    </Category>
  );
}

export default App;
