
import React from 'react';

export class Cart extends React.Component {
  render() {
    return (
      <>
        {this.props.item.map((item, index) => (
          <tr key={index}>
            <td>{item.itemname}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </>
    );
  }
}
