import React from 'react';
import { render } from 'react-dom';
import reducers from './reducers';
import Provider from './Provider';
import App from './containers/App';

document.body.style.margin = 0;

const Main = () => (
  <Provider reducer={reducers}>
    <App />
  </Provider>
);

render(<Main />, document.querySelector('#app'));
