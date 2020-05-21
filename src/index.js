import React, {
  Fragment,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import Home from './components/Home';
import LogIn from './containers/login/LogIn';

require('./css/index.css');

const Index = () => {
  const isLogged = useSelector((state) => state.auth.auth);

  return (
    <Fragment>
      {isLogged ? <Home /> : <LogIn /> }
    </Fragment>
  );
};

module.exports = Index;
