import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";
import { useState } from "react";
import tileBank from "./tile.json";

function App() {
  const [tilesInGame, setTilesInGame] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  let test = {
    "description": "Tile distribution and points for the English-language edition of Scrabble",
    "letters":
    {
        "a": { "points":  1, "tiles":  9 },
        "b": { "points":  3, "tiles":  2 },
        "c": { "points":  3, "tiles":  2 },
        "d": { "points":  2, "tiles":  4 },
        "e": { "points":  1, "tiles": 12 },
        "f": { "points":  4, "tiles":  2 },
        "g": { "points":  2, "tiles":  3 },
        "h": { "points":  4, "tiles":  2 },
        "i": { "points":  1, "tiles":  9 },
        "j": { "points":  8, "tiles":  1 },
        "k": { "points":  5, "tiles":  1 },
        "l": { "points":  1, "tiles":  4 },
        "m": { "points":  3, "tiles":  2 },
        "n": { "points":  1, "tiles":  6 },
        "o": { "points":  1, "tiles":  8 },
        "p": { "points":  3, "tiles":  2 },
        "q": { "points": 10, "tiles":  1 },
        "r": { "points":  1, "tiles":  6 },
        "s": { "points":  1, "tiles":  4 },
        "t": { "points":  1, "tiles":  6 },
        "u": { "points":  1, "tiles":  4 },
        "v": { "points":  4, "tiles":  2 },
        "w": { "points":  4, "tiles":  2 },
        "x": { "points":  8, "tiles":  1 },
        "y": { "points":  4, "tiles":  2 },
        "z": { "points": 10, "tiles":  1 },
        "blank": { "tiles": 2}
    }
}

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const tiles = tileBank;
  console.log(tiles)
  console.log(letters);


function start() {
  for (let i = 0; i < letters.length; i++) {
    console.log('current letter: ', letters[i])
    let meme = letters[i]
    console.log('letter data: ', test.letters[meme])
  }
  let currGameTile = []
}
start()


  return (
    <div className="App">
      <center>
        <Board />
      </center>
    </div>
  );
}

export default App;
