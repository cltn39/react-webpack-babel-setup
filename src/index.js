import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./index.scss"

const title = 'Custom React setup';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();