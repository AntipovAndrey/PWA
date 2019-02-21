import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Loading from './components/Loading';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo']
};

const store = createStore(persistReducer(persistConfig, reducers), composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistStore(store)}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
