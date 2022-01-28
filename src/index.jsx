import React from 'react';
import ReactDom from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import App from 'App';

ReactDom.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
