// Third Party imports
import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';

// Project imports
import rootReducer from './reducers';
import rootSaga from './sagas';

// Initialize the sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  // Create store with redux-saga middleware
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
  const store = createStoreWithMiddleware(rootReducer);

  // Start the saga middleware
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export default configureStore;
