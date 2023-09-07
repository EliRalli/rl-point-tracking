import React, { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, { name, score: 0 }]);
  };

  const incrementScore = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index].score += value;
    setNames(updatedNames);
  };

  return (
    <div className="App">
      <h1>Name Scorer</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a name"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addName(e.target.value.trim());
              e.target.value = "";
            }
          }}
        />
      </div>
      <div className="names-list">
        <ul>
          {names.map((nameObj, index) => (
            <li key={index}>
              {nameObj.name}
              <div>
                <button onClick={() => incrementScore(index, 1)}>+1</button>
                <button onClick={() => incrementScore(index, 0.5)}>+0.5</button>
              </div>
              <span className="score">{nameObj.score.toFixed(1)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
