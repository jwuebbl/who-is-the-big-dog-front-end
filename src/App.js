import React from 'react';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="container">
      <div className="left-column">
        {[...Array(10).keys()].map(i => (
          <div key={i} className="row">Left {i + 1}</div>
        ))}
      </div>
      <div className="right-column">
        {[...Array(9).keys()].map(i => (
          <div key={i} className="row">Right {i + 1}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
