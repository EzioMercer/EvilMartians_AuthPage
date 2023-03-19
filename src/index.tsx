import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Please specify a root container')

const root = createRoot(rootContainer);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
