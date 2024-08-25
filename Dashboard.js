import React from 'react';

function Dashboard({ holdings }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {holdings.length > 0 ? holdings.map(stock => (
          <li key={stock.name}>{stock.name}: {stock.quantity} shares</li>
        )) : <li>No holdings</li>}
      </ul>
    </div>
  );
}

export default Dashboard;
