import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import { OddPlayers } from './OddPlayers';
import { EvenPlayers } from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';
import './App.css'; 

function App() {
  const flag = true; // Change this to false to see the other output

  // Data for ListofPlayers and Scorebelow70
  const allPlayers = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  // Data for IndianPlayers and merging
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6']; 
  const MergedIndianPlayers = [...T20Players, ...RanjiTrophyPlayers]; 

  if (flag === true) {
    return (
      <div className="App">
        <h1>List of Players</h1>
        <ListofPlayers players={allPlayers} /> 
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={allPlayers} /> 
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Indian Team</h1>
        <hr />
        <OddPlayers team={IndianTeam} /> 
        <hr />
        <EvenPlayers team={IndianTeam} /> 
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={MergedIndianPlayers} />
      </div>
    );
  }
}

export default App;