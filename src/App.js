import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Loadable from 'react-loadable';

const AsyncLoginLayout = Loadable({
	loader: () => import('./layouts/auth'),
	loading: Loading
});

const AsyncDefaultLayout = Loadable({
	loader: () => import('./layouts/default'),
	loading: Loading
});

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">
				<Route exact path="/" component={AsyncLoginLayout} />
				<Route path="/dashboard" component={AsyncDefaultLayout} />
			</div>
		</Router>
    );
  }
}

export default App;
