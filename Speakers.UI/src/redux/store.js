import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);

export default store;
