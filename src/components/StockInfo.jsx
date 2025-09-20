import React, { useState, useEffect } from "react";

const StockInfo = () => {
  const [stock, setStock] = useState({ symbol: "CLSK", price: 0, change: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/stocks");
        const data = await res.json();
        const clsk = data.find((s) => s.symbol === "CLSK");
        if (clsk) setStock(clsk);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchStock();
    const interval = setInterval(fetchStock, 5000);
    return () => clearInterval(interval);
  }, []);

  const isPositive = stock.change >= 0;

  return (
    <div className="card">
      <div className="stock-header">
        <div>
          <h1 className="stock-name">{stock.symbol}</h1>
          <div className="stock-price">
            {loading ? "Loading..." : `$${stock.price?.toFixed(2)}`}
          </div>
          <div className={`stock-change ${isPositive ? "positive" : "negative"}`}>
            {isPositive ? "+" : ""}{stock.change?.toFixed(2)}%
          </div>
        </div>
        <div className="actions">
          <button className="btn btn-buy">Buy</button>
          <button className="btn btn-sell">Sell</button>
        </div>
      </div>
      <div className="stats">
        <div className="stat-box">
          <div className="stat-label">Daily Range</div>
          <div className="stat-value">$94.31 - $97.54</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Volume</div>
          <div className="stat-value">15.55M</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Avg Volume</div>
          <div className="stat-value">19.58M</div>
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
