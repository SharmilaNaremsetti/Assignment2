import React, { useState } from 'react';

function Trade({ onTrade }) {
  const [stock, setStock] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState('buy');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stock && quantity > 0) {
      onTrade(stock, parseInt(quantity), type);
      setStock('');
      setQuantity(0);
    }
  };

  return (
    <div>
      <h2>Trade</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stock}
          onChange={e => setStock(e.target.value)}
          placeholder="Stock Name"
        />
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <button type="submit">Execute Trade</button>
      </form>
    </div>
  );
}

export default Trade;
