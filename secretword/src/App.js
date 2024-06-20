/* CSS */
import './App.css';

/* React */
import { useCallback, useEffect, useState } from 'react';

/* Importação dos dados - data */
import { wordsList } from './data/word';

/* Components */
import StartScreen from './Components/StartScreen/StartScreen';
import Game from './Components/Game/Game';
import GameOver from './Components/GameOver/GameOver';

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  /* starts the secret word game */
  const startGame = ()=>{
    setGameStage(stages[1].name)
  }

  /* process the latter input */

  const verifyLetter = ()=>{
    setGameStage(stages[2].name)
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame = {startGame} />}
      {gameStage === "game" && <Game verifyLetter = {verifyLetter}/>}
      {gameStage === "end" && <GameOver/>}
    </div>
  );
}

export default App;
