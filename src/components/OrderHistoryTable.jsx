import React from "react";

const OrderHistoryTable = () => (
  <div className="card">
    <div className="card-header">
      <h2 className="card-title">Order History</h2>
    </div>
    <div className="order-history">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>Shares</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="order-open">
            <td>--:--:--</td>
            <td>CLSK</td>
            <td className="positive">BUY</td>
            <td>--</td>
            <td>$91.95</td>
          </tr>
          <tr>
            <td>09:32:47</td>
            <td>MULF</td>
            <td className="positive">BUY</td>
            <td>0.5461</td>
            <td>$9.1550</td>
          </tr>
          <tr>
            <td>09:32:51</td>
            <td>CSX</td>
            <td className="positive">BUY</td>
            <td>0.1446</td>
            <td>$34.5700</td>
          </tr>
          <tr>
            <td>09:36:27</td>
            <td>CORZ</td>
            <td className="positive">BUY</td>
            <td>0.3693</td>
            <td>$13.5400</td>
          </tr>
          <tr>
            <td>09:36:34</td>
            <td>TEM</td>
            <td className="positive">BUY</td>
            <td>0.0621</td>
            <td>$80.5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderHistoryTable;
