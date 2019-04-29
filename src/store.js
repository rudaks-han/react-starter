
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer/UserReducer';

const rootReducer = combineReducers({
  //
  routing: routerReducer,

  //add module
  userState: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
