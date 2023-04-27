import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';

function init() {
  const appContainer = document.createElement('div');
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error('Can not find AppContainer');
  }
  
  ReactDOM.render(<Menu />, appContainer);
}

init();
