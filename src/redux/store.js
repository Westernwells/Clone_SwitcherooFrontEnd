// import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers/index';
import { persistStore } from 'redux-persist';

let store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

// let store = createStore(Reducers, applyMiddleware(thunk));/
let persistor = persistStore(store);
export { store, persistor };
