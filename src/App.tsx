import React from 'react'

import { appReducer, initialState } from './state/appContext'
import { checkGame, getGameResult, getNewSquaresArray, getNextPlayer } from './util'

import Board from './components/Board'

import './App.scss'

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  const { currentPlayer, squaresArray, step, isGameOver, winner, winningLine } = state

  const resetGame = () => {
    dispatch({ type: 'ResetGame' })
  }

  const handleSquareClick = (square: number) => {
    if (squaresArray[square] !== '' || isGameOver) return

    const nextPlayer = getNextPlayer(currentPlayer)
    const newSquaresArray = getNewSquaresArray(squaresArray, currentPlayer, square)

    dispatch({
      type: 'GameTick',
      payload: { step: step + 1, currentPlayer: nextPlayer, squaresArray: newSquaresArray },
    })
  }

  React.useEffect(() => {
    if (step > 4) {
      const [gameOver, winningLineIndex] = checkGame(squaresArray)
      if (gameOver) {
        dispatch({ type: 'GameOver', payload: { winner: getNextPlayer(currentPlayer), winningLine: winningLineIndex } })
      }
    }
  }, [step]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App container">
      <h1 className="title">Tic Tac Toe</h1>
      {!isGameOver ? (
        <h2 className="current-player">{`It's ${currentPlayer} turn`}</h2>
      ) : (
        <h2>{getGameResult(winner)}</h2>
      )}
      <Board squaresArray={squaresArray} onSquareClick={handleSquareClick} winningLine={winningLine} />

      <button className="reset-btn" type="button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  )
}

export default App
