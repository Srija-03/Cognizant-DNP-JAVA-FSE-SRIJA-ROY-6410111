import React from 'react';

function ListofPlayers({ players }) {
  // players array is now passed as a prop, as defined in App.js
  return (
    <div>
      {players.map((item, index) => (
        <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
      ))}
    </div>
  );
}

export default ListofPlayers;