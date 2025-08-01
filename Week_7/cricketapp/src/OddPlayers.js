import React from 'react';

export function OddPlayers({ team }) {
  
  const [first, , third, , fifth] = team;

  return (
    <div>
      <h1>Odd Players</h1>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}