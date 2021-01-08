import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import settingsReducer from './redux/settingsReducer';

const store = createStore(
  settingsReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <CssBaseline />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
