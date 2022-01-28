import React from 'react';
import { ImageAdder, Item, Theme } from 'components';

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
        <Theme />
      </Item>
    </>
  );
}

export default App;
