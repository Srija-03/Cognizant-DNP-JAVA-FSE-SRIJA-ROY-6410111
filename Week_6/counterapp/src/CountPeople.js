import React from 'react';

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1,
    }));
  };

  render() {
    const buttonStyle = {
      backgroundColor: '#e6ffe6',
      border: '2px solid green',
      color: 'green',
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
    };

    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      gap: '100px',
      marginTop: '80px',
      flexWrap: 'wrap'
    };

    const rowStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    };

    const labelStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    };

    return (
      <div style={containerStyle}>
        <div style={rowStyle}>
          <button onClick={this.updateEntry} style={buttonStyle}>
            Login
          </button>
          <span style={labelStyle}>
            {this.state.entrycount} People Entered!!!
          </span>
        </div>

        <div style={rowStyle}>
          <button onClick={this.updateExit} style={buttonStyle}>
            Exit
          </button>
          <span style={labelStyle}>
            {this.state.exitcount} People Left!!!
          </span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
