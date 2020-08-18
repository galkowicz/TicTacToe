// eslint-disable-next-line max-classes-per-file
export interface AppAction {
  type: string
}

export class GameTick implements AppAction {
  readonly type = 'GameTick'

  constructor(public payload: { step: number; currentPlayer: 'o' | 'x'; squaresArray: string[] }) {}
}

export class ResetGame implements AppAction {
  readonly type = 'ResetGame'
}

export class GameOver implements AppAction {
  readonly type = 'GameOver'

  constructor(public payload: { winner: 'o' | 'x' | ''; winningLine: number | null }) {}
}

export type AppActions = GameTick | ResetGame | GameOver
