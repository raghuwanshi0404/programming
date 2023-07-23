import './App.css';
import Header from './components/Header.js'
import Palindrom from './components/Palindrom.js';
import Counter from './components/Counter.js';
import { useState } from 'react';


function App() {
	const [active, setActive] = useState(1);
	const handleFunc = (handleValue) =>{
		console.log(handleValue);
		setActive(Number(handleValue))
	}
	return (
		<div className="App">
			<Header remote={handleFunc} />
			{
				(() =>{
					if(active === 1) {
						return (<Palindrom />)
					} else if(active === 2){
						return(<Counter />)
					}
				})()
			}
			
			
		</div>
	);
}

export default App;
