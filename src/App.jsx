import React from 'react';
import { GoodsInformation, GoodsStock, Item } from 'components';

function App() {
  return (
    <>
      <Item>
        <GoodsInformation />
      </Item>
      <Item>
        <GoodsStock />
      </Item>
      <div>hello</div>
      <div>hello</div>
    </>
  );
}

export default App;
