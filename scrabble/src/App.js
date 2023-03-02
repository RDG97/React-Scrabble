import logo from './logo.svg';
import './App.css';
import Board from './Board';
import { useState } from 'react';
import tileBank from './tile.json'



function App() {
  const [tilesInGame, setTilesInGame] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);



const tiles = tileBank.letters
console.log(tiles)




  return (
    <div className="App">
      <center>

      <Board />
      </center>
    </div>
  );
}

export default App;
