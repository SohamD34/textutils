import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';

function App() {

	const [mode, setMode] = useState('light');

	const toggleMode = () => {
		if(mode === 'light'){
			setMode('dark');
			document.body.style.backgroundColor = '#042643';
			document.body.style.color = 'white';
		}
		else{
			setMode('light');
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
		}
	}

	return (
		// JSX component - HTML like syntax
		// class --> className
		// for --> htmlFor

		// This return should contain only one parent element - here it is div.
		// All components are included in this div.
		// These components are taken from getbootstrap.com

		<>
			<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>       
			<div className='container my-3'>
				<TextForm heading="Enter the text to change cases."/>
			</div>
		</>
	);
}

export default App;
