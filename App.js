import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Trade from './Trade';

function App() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/holdings')
      .then(response => response.json())
      .then(data => setHoldings(data));
  }, []);

  const handleTrade = (stock, quantity, type) => {
    fetch('http://localhost:5000/trade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stock, quantity, type }),
    })
      .then(response => response.json())
      .then(data => setHoldings(data));
  };

  return (
    <div className="App">
      <h1>Real-Time Stock Market App</h1>
      <Trade onTrade={handleTrade} />
      <Dashboard holdings={holdings} />
    </div>
  );
}

export default App;
