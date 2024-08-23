import React, { useState } from 'react';

function Game() {
  const [columns, setColumns] = useState(1);
  const [GameData, setGameData] = useState([{ playerName: '', locked: false, values: Array(9).fill({ value: '', locked: false }) }]);

  const addColumn = () => {
    setColumns(columns + 1);
    setGameData([...GameData, { playerName: '', locked: false, values: Array(9).fill({ value: '', locked: false }) }]);
  };

  const handlePlayerNameChange = (index, e) => {
    const newGameData = [...GameData];
    newGameData[index].playerName = e.target.value;
    setGameData(newGameData);
  };

  const lockPlayerName = (index) => {
    const newGameData = [...GameData];
    newGameData[index].locked = true;
    setGameData(newGameData);
  };

  const unlockPlayerName = (index) => {
    const newGameData = [...GameData];
    newGameData[index].locked = false;
    setGameData(newGameData);
  };

  const handleNumberChange = (colIndex, rowIndex, e) => {
    const value = e.target.value;
    if (value >= 0) {
      const newGameData = [...GameData];
      newGameData[colIndex].values[rowIndex].value = value;
      setGameData(newGameData);
    }
  };

  const lockNumber = (colIndex, rowIndex) => {
    const newGameData = [...GameData];
    newGameData[colIndex].values[rowIndex].locked = true;
    setGameData(newGameData);
  };

  const unlockNumber = (colIndex, rowIndex) => {
    const newGameData = [...GameData];
    newGameData[colIndex].values[rowIndex].locked = false;
    setGameData(newGameData);
  };

  return (
    <div>
      <button onClick={addColumn}>Add Column</button>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {GameData.map((column, colIndex) => (
          <div key={colIndex} style={{ margin: '0 10px' }}>
            {/* Player Name Text Box */}
            <div>
              <input
                type="text"
                placeholder="Player Name"
                value={column.playerName}
                onChange={(e) => handlePlayerNameChange(colIndex, e)}
                disabled={column.locked}
                style={{ marginBottom: '10px' }}
              />
              <button onClick={() => column.locked ? unlockPlayerName(colIndex) : lockPlayerName(colIndex)}>
                {column.locked ? 'Unlock' : 'Lock'}
              </button>
            </div>
            {/* Number Boxes */}
            {column.values.map((row, rowIndex) => (
              <div key={rowIndex}>
                <input
                  type="number"
                  placeholder={`Row ${rowIndex + 1}`}
                  value={row.value}
                  onChange={(e) => handleNumberChange(colIndex, rowIndex, e)}
                  disabled={row.locked}
                  style={{ display: 'block', marginBottom: '5px' }}
                />
                <button onClick={() => row.locked ? unlockNumber(colIndex, rowIndex) : lockNumber(colIndex, rowIndex)}>
                  {row.locked ? 'Unlock' : 'Lock'}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
