import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Entry point -- fetched from index.html div=root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />               
	</React.StrictMode>
);

// App.js is rendered here in the <App /> tag.

reportWebVitals();
