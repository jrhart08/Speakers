import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import AppInner from './App.inner';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppInner />
    </Provider>
  </BrowserRouter>
);
export default App;
