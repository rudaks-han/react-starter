
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer/userReducer';
import itemReducer from './item/reducer/itemReducer';

const rootReducer = combineReducers({
  //
  routing: routerReducer,

  //add module
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
