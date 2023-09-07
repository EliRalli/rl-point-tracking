import React, { useState } from "react";
import "./App.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, { name, score: 0, color: getRandomColor() }]);
  };

  const incrementScore = (index, value) => {
    const updatedNames = [...names];
    updatedNames[index].score += value;
    setNames(updatedNames);
  };

  const clearScore = (index) => {
    const updatedNames = [...names];
    updatedNames[index].score = 0;
    setNames(updatedNames);
  };

  const clearAllNames = () => {
    setNames([]);
  };

  return (
    <div className="App">
      <h1>Rocket League Own Goal Points</h1>
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
        <button onClick={clearAllNames} className="clear-all-button">
          Clear All Names
        </button>
        <ul>
          {names.map((nameObj, index) => (
            <li
              key={index}
              style={{ backgroundColor: nameObj.color }}
              className="name-item"
            >
              <span className="name">{nameObj.name}</span>
              {/* {nameObj.name} */}
              <div className="buttons">
                <button onClick={() => incrementScore(index, 1)}>+1</button>
                <div></div>
                <button onClick={() => incrementScore(index, 0.5)}>+0.5</button>
                <div></div>
                <button onClick={() => clearScore(index)}>Clear</button>
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
