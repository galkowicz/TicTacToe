import { AppActions } from './appActions'

export type Player = 'o' | 'x'

export type AppState = {
  squaresArray: string[]
  step: number
  isGameOver: boolean
  winningLine: number
  readonly winner: '' | 'o' | 'x'
  readonly currentPlayer: Player
}

export const initialState: AppState = {
  squaresArray: new Array(9).fill(''),
  step: 0,
  isGameOver: false,
  winner: '',
  currentPlayer: 'x',
  winningLine: -1,
}

export const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case 'GameTick': {
      const { step, currentPlayer, squaresArray } = action.payload

      return { ...state, step, currentPlayer, squaresArray }
    }
    case 'GameOver': {
      const { winningLine, winner } = action.payload

      return { ...state, isGameOver: true, winner, winningLine }
    }
    case 'ResetGame': {
      return { ...initialState }
    }

    default:
      throw new Error('reducer error')
  }
}
