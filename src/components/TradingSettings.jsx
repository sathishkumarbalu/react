import React from "react";

const TradingSettings = () => (
  <div className="card">
    <div className="card-header">
      <h2 className="card-title">Trading Settings</h2>
    </div>
    <div className="settings">
      <div className="setting-item">
        <div className="setting-label">Refresh</div>
        <div className="setting-value">100s</div>
      </div>
      <div className="setting-item">
        <div className="setting-label">Buy Threshold</div>
        <div className="setting-value">5.00%</div>
      </div>
      <div className="setting-item">
        <div className="setting-label">Sell Threshold</div>
        <div className="setting-value">10.00%</div>
      </div>
      <div className="setting-item">
        <div className="setting-label">Buy Amount</div>
        <div className="setting-value">$5.00</div>
      </div>
    </div>
  </div>
);

export default TradingSettings;
