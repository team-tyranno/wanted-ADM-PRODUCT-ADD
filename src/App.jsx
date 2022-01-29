<<<<<<< HEAD
import React from 'react';
import { ProductRegister } from 'pages';

function App() {
  return <ProductRegister />;
=======
import React, { useState } from 'react';
import { ImageAppender, Category, ProductInfo, Modal } from 'components';

function App() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Category title="상품 소개 이미지">
        <ImageAppender isMulti />
      </Category>
      <Category title="구매자 추천 이미지">
        <ImageAppender isMulti />
      </Category>
      <Category title="상품 정보 고시">
        <ProductInfo />
      </Category>
      {openModal && <Modal text="입력해주세요" onClick={() => setOpenModal(false)} />}
    </>
  );
>>>>>>> 34c6faeb5dc56de1583b922a702333ee8bfec277
}

export default App;
