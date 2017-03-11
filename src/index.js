import React from 'react';
import ReactDom from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App.js';

const render = Component => {
	ReactDom.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	)
}

render(App);

if (module.hot) {
	module.hot.accept('./components/App.js', () => {
		console.log(App);
		debugger;
		render(App)
	});
}
