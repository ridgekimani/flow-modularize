import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistCombineReducers, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from '../src/reducers';
import { navMiddleware } from '../src/navigators';

const config = {
  debug: true,
  key: 'root',
  stateReconciler: autoMergeLevel2,
  storage,
};

const persistedReducers = persistCombineReducers(config, reducers);

const configureStore = () => {
  const store = createStore(
    persistedReducers,
    compose(applyMiddleware(navMiddleware, thunk, logger)),
  );
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
