import React from 'react';
import './App.css'; 

function App() {
  const element = "Office Space";
  
  const office = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  const OfficeDetail = ({ officeData }) => {
    const rentStyle = {
      color: officeData.Rent <= 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };

    return (
      <div>
        <h3>Name: {officeData.Name}</h3>
        <h3 style={rentStyle}>Rent: Rs. {officeData.Rent}</h3>
        <h3>Address: {officeData.Address}</h3>
      </div>
    );
  };
  
  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>

      <img 
        src="https://via.placeholder.com/250" 
        width="250" 
        height="250" 
        alt="Office Space" 
      />

      <OfficeDetail officeData={office} />
    </div>
  );
}

export default App;