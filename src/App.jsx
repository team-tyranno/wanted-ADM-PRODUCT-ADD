import React from 'react';
import { ImageAdder, Item } from 'components';

function App() {
  return (
    <>
      <Item>
        <ImageAdder isMulti={false} />
      </Item>
      <Item>
        <ImageAdder isMulti />
      </Item>
      <Item>
        <ImageAdder isMulti={false} />
      </Item>
    </>
  );
}

export default App;
