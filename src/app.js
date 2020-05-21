import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider,
} from 'react-redux';
import Index from './index';
import store from './store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

const dom = document.getElementById('App');
if (dom === null) {
  // Error
  console.error('dom does not exist');
} else {
  ReactDOM.render(<App />, dom);
}
