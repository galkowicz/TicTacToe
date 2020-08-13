import { AppActions } from './appActions'

export type AppState = {
  squaresArray: string[]
  step: number
  isGameOver: boolean
  readonly winner: '' | 'o' | 'x'
  readonly currentPlayer: 'o' | 'x'
}

const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case 'GameTick': {
      const { step, currentPlayer, squaresArray } = action.payload

      return { ...state, step, currentPlayer, squaresArray }
    }
    case 'GameOver': {
      return { ...state, isGameOver: true, winner: action.payload.winner }
    }
    case 'ResetGame': {
      return { ...state }
    }

    default:
      throw new Error('reducer error')
  }
}

export { appReducer }
