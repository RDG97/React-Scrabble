import logo from './logo.svg';
import './App.css';
import Board from './Board';
import texttiles from './Tilefile.js'
import Set from './Tilefile'
import { useState } from 'react';
import tileBank from './tile.json'



function App() {
  const [tiles, setTiles] = useState([]);
  
  let Tbank = JSON.parse(tileBank)


console.log('Tilebank: ', Tbank)
for (let i = 0; i < Tbank.length; i++) {
  console.log('hump number', i)
}



  return (
    <div className="App">
      <center>
      <Set  tiles={tiles} setTiles={setTiles}/>
      <Board />
      </center>
    </div>
  );
}

export default App;
