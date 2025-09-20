import React from "react";

const ActivePositionsTable = () => (
  <div className="card">
    <div className="card-header">
      <h2 className="card-title">Active Positions</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Shares</th>
          <th>Avg Price</th>
          <th>Current</th>
          <th>P/L %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>MULF</td>
          <td>0.5461</td>
          <td>$9.15</td>
          <td>$9.15</td>
          <td className="positive">0.0%</td>
        </tr>
        <tr>
          <td>CSX</td>
          <td>0.1446</td>
          <td>$34.57</td>
          <td>$34.57</td>
          <td className="positive">0.0%</td>
        </tr>
        <tr>
          <td>CORZ</td>
          <td>0.3693</td>
          <td>$13.54</td>
          <td>$13.54</td>
          <td className="positive">0.0%</td>
        </tr>
        <tr>
          <td>TEM</td>
          <td>0.0621</td>
          <td>$80.50</td>
          <td>$80.50</td>
          <td className="positive">0.0%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ActivePositionsTable;
