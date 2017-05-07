// @flow
/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const Wrap = Component =>
  <AppContainer>
    <Component />
  </AppContainer>;

ReactDOM.render(
  Wrap(App),
  document.querySelector('#root'),
);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const Next = require('./app').default;
    ReactDOM.render(Wrap(Next), document.querySelector('#root'));
  });
}
