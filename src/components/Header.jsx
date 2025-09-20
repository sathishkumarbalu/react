import React from "react";
import "../App.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <i className="fas fa-chart-line"></i>
      <span>TradeHub</span>
    </div>
    <div className="user-actions">
      <button><i className="fas fa-bell"></i></button>
      <button><i className="fas fa-user"></i></button>
    </div>
  </header>
);

export default Header;
