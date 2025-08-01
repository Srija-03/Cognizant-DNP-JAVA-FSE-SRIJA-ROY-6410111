import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      currency: '',
      convertedAmount: 0
    };
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { amount, currency } = this.state;
    let convertedValue;
    
    if (currency.toLowerCase() === 'euro') {
      convertedValue = amount / 80;
      alert(`Converting to Euro Amount is ${convertedValue.toFixed(2)}`);
    } else {
      alert("Unsupported currency for conversion.");
    }
    
    this.setState({ convertedAmount: convertedValue });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input 
              type="number" 
              name="amount" 
              value={this.state.amount} 
              onChange={this.handleChange} 
            />
          </label>
          <br /><br />
          <label>
            Currency:
            <input 
              type="text" 
              name="currency" 
              value={this.state.currency} 
              onChange={this.handleChange} 
            />
          </label>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;