import React from "react";

const NextOrders = () => (
  <div className="card">
    <div className="card-header" style={{ marginTop: 15 }}>
      <h2 className="card-title">Next Orders</h2>
    </div>
    <div className="stats">
      <div className="stat-box">
        <div className="stat-label">Next Buy Price</div>
        <div className="stat-value">$91.95</div>
        <div className="stat-label">-5.00% from current</div>
      </div>
      <div className="stat-box">
        <div className="stat-label">Next Sell Price</div>
        <div className="stat-value">$106.47</div>
        <div className="stat-label">+10.00% from current</div>
      </div>
    </div>
  </div>
);

export default NextOrders;
