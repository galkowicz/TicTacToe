import React from 'react'

import { appReducer, AppState } from './state/appContext'
import Board from './components/Board'

import './App.scss'

const initialState: AppState = {
  squaresArray: new Array(9).fill(''),
  step: 0,
  isGameOver: false,
  winner: '',
  currentPlayer: 'x',
}

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  const { currentPlayer, squaresArray, step, isGameOver, winner } = state

  return (
    <div className="App">
      <Board squaresArray={squaresArray} onSquareClick={(index) => console.log('square clicked', index)} />
    </div>
  )
}

export default App
