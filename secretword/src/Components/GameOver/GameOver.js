import "../GameOver/GameOver.css"

const GameOver = ({retry})=> {
  return (
    <div>
        <h1>Game Over!</h1>
        <button onClick={retry}>Reiniciar o jogo</button>
    </div>
  )
}

export default GameOver