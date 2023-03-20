import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.module.scss';
import App from './App';
import store from './Redux/store';

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Please specify a root container')

createRoot(rootContainer).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
