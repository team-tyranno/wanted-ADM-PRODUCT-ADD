import React from 'react';
import { ImageAdder, Category } from 'components';

function App() {
  return (
    <>
      <Category title="상품 소개 이미지">
        <ImageAdder />
      </Category>
      <Category title="구매자 추천 이미지">
        <ImageAdder />
      </Category>
    </>
  );
}

export default App;
