import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import PlaceOrder from './components/menu'
import Copyright from './components/footer'
import {Like} from './components/like'
import {Dislike} from './components/like'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing =(
	<BrowserRouter>
	<div>
		<Route path ="/" component= {App} />
		<Route path = "/footer" component = {PlaceOrder} />

	</div>
	</BrowserRouter>
);
ReactDOM.render(
  <BrowserRouter><App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
