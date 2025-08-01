import React from 'react';

function ListofIndianPlayers({ IndianPlayers }) { 
  return (
    <div>
      <h1>List of Indian Players Merged:</h1>
      {IndianPlayers.map((player, index) => (
        <div key={index}>
          <li>Mr. {player}</li>
        </div>
      ))}
    </div>
  );
}

export default ListofIndianPlayers;