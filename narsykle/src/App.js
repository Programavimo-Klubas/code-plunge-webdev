import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from "./day"

function App() {
	useEffect(async function () {
		const daysText = await fetch("http://localhost:3000/weather");
		const days = await daysText.json();
		console.log("days", days);
	});

  return (
	  <div>
		  <Day title="Pirmadienis" temperature={10} />
		  <Day title="Antradienis" temperature={11} />
		  <Day title="Treciadienis" temperature={12} />
	  </div>
  )
}

export default App;
