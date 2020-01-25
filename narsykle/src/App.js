import React from 'react';
import logo from './logo.svg';
import './App.css';
import Day from "./day"

function App() {
  return (
	  <div>
		  <Day title="Pirmadienis" temperature={10} />
		  <Day title="Antradienis" temperature={11} />
		  <Day title="Treciadienis" temperature={12} />
	  </div>
  )
}

export default App;
