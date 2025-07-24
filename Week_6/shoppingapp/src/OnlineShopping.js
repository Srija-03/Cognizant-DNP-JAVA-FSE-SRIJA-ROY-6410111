import React from 'react';
import { Cart } from './Cart';

export class OnlineShopping extends React.Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 }
    ];

    return (
      <div
        className="mydiv"
        style={{
          textAlign: 'center',
          color: 'green',
          marginTop: '30px'
        }}
      >
        <h1>Items Ordered :</h1>
        <table
          border="1"
          cellPadding="10"
          style={{
            margin: '0 auto', // centers the table
            color: 'green',    // green text
            fontSize: '18px'
          }}
        >
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <Cart item={CartInfo} />
          </tbody>
        </table>
      </div>
    );
  }
}
