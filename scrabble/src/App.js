import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";
import { useState } from "react";
import tileBank from "./tile.json";

function App() {
  const [tilesInGame, setTilesInGame] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  let test = JSON.stringify(tileBank);
  let test2 = JSON.parse(test);

  const tiles = tileBank;
  console.log(test2);
  console.log(test2);


  for (i = 0; i < 27; i++) {}

  return (
    <div className="App">
      <center>
        <Board />
      </center>
    </div>
  );
}

export default App;
