// src/App.js

import React from 'react';
import './App.css';
import Posts from './Posts'; // ✅ Step 10: Import the component

function App() {
  return (
    <div className="App">
      <h1>Blog Application</h1>
      <Posts /> {/* ✅ Add the Posts component here */}
    </div>
  );
}

export default App;
