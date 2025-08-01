import React from 'react';

export function EvenPlayers({ team }) {
  
  const [, second, , fourth, , sixth] = team;

  return (
    <div>
      <h1>Even Players</h1>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </div>
  );
}