import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchCards } from './actions/card';
import Home from './components/Home';
import LogIn from './containers/login/LogIn';

require('./css/index.css');

const Index = () => {

	const isLogged = useSelector(state => state.auth.auth);

	return (
		<Fragment>
		{isLogged ? <Home /> : <LogIn /> }
		</Fragment>
	)
}

module.exports = Index
