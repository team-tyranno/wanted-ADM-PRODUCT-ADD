import React from 'react';
import { ImageAppender, Category } from 'components';

function App() {
  return (
    <>
      <Category title="상품 소개 이미지">
        <ImageAppender />
      </Category>
      <Category title="구매자 추천 이미지">
        <ImageAppender />
      </Category>
    </>
  );
}

export default App;
