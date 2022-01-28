import React, { useEffect, useState } from 'react';
import { ImageAppender, Category, ProductInfo, Modal } from 'components';

function App() {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(false);
  });

  return (
    <>
      <Category title="상품 소개 이미지">
        <ImageAppender />
      </Category>
      <Category title="구매자 추천 이미지">
        <ImageAppender />
      </Category>
      <Category title="상품 정보 고시">
        <ProductInfo />
      </Category>
      {openModal && <Modal text="입력해주세요" />}
    </>
  );
}

export default App;
