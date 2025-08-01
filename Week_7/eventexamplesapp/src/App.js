import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  sayHello = () => {
    alert("Hello member!");
  };

  sayWelcome = (message) => {
    alert(message);
  };
  
  wasClicked = (event) => {
    alert("I was clicked");
    console.log(event.target);
  };

  handleMultipleClicks = () => {
    this.increment();
    this.sayHello();
  };

  render() {
    return (
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <h1>Counter: {this.state.count}</h1>
        
        <button onClick={this.increment}>Increment</button>
        
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        
        <button onClick={this.handleMultipleClicks}>Increase & Say Hello</button>
        
        <br /><br />

        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>

        <br /><br />

        <button onClick={this.wasClicked}>Click on me</button>

        <hr />
        
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;