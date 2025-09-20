import React from "react";
import Header from "../components/Header";
import StockInfo from "../components/StockInfo";
import ActivePositionsTable from "../components/ActivePositionsTable";
import PortfolioSummary from "../components/PortfolioSummary";
import CashBalance from "../components/CashBalance";
import OrderHistoryTable from "../components/OrderHistoryTable";
import TradingSettings from "../components/TradingSettings";
import NextOrders from "../components/NextOrders";
import "../App.css";

const Dashboard = () => (
  <div className="container">
    <Header />
    <div className="main-content">
      <div className="left-column">
        <StockInfo />
        <ActivePositionsTable />
        <PortfolioSummary />
        <CashBalance />
      </div>
      <div className="right-column">
        <OrderHistoryTable />
        <TradingSettings />
        <NextOrders />
      </div>
    </div>
  </div>
);

export default Dashboard;
