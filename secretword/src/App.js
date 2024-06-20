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

  const [pickedWord, setPickedWord]= useState("");
  const [pickedCategory, setPickedCategory] = useState("")
  const [latters, setLetters] = useState([])

  const pickedWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  };


  /* starts the secret word game */
  const startGame = ()=>{

    /* picked word and picked category */
    pickedWordAndCategory();



    setGameStage(stages[1].name)
  }

  /* process the latter input */

  const verifyLetter = ()=>{
    setGameStage(stages[2].name)
  };

  /* Restart the game */

  const retry = ()=>{
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame = {startGame} />}
      {gameStage === "game" && <Game verifyLetter = {verifyLetter}/>}
      {gameStage === "end" && <GameOver retry = {retry}/>}
    </div>
  );
}

export default App;
