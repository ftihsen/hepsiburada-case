import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index';

const configureStore = (prelodedState) => {
  const middlewares = [thunk];

  /* eslint-disable */
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }
  /* eslint-enable */
  const composed = [applyMiddleware(...middlewares)];
  /* eslint-disable */
  if (process.env.NODE_ENV === 'development') {
    const devExtension =
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    if (devExtension) {
      composed.push(devExtension);
    }
  }
  /* eslint-enable */
  const store = createStore(rootReducer, prelodedState, compose(...composed));

  /* eslint-disable */
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  /* eslint-enable */

  return store;
};

export default configureStore;
