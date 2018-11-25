import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

if (module.hot) {
  module.hot.accept(function () {
    console.log('check hot reload!')
  });
}

render(<Root />, document.querySelector('#app'));
