import React from 'react';
import ImageAdder from 'components/templates/Item/ImageAdder';
import ProductInfo from 'components/templates/Item/ProductInfo';
import { Category } from './components/templates/Category';

function App() {
  return (
    <>
      <Category title="상품 소개 이미지">
        <ImageAdder />
      </Category>
      <Category title="구매자 추천 이미지">
        <ImageAdder />
      </Category>
      <Category title="상품 정보 고시">
        <ProductInfo />
      </Category>
    </>
  );
}

export default App;
