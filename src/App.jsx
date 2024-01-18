import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSquareSelect = (rowIndex, colIndex) => {
    setActivePlayerSymbol((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard onSquareSelect={handleSquareSelect} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
