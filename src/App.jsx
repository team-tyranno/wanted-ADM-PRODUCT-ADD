import React from 'react';
import Category from 'components/templates/Category';
import Item from 'components/templates/Item';
import ProductOptionImage from 'components/organisms/ProductOption/Image';
import ProductOptionInput from 'components/organisms/ProductOption/Input';

function App() {
  return (
    <>
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
          <div>hello</div>
        </Item>
      </Category>
      <Category title="상품 옵션*">
        <ProductOptionImage />
        <ProductOptionInput />
      </Category>
    </>
  );
}

export default App;
