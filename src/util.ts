import { Player } from './state/appContext'

export const getNextPlayer = (currentPlayer: Player): Player => {
  if (currentPlayer === 'x') {
    return 'o'
  }
  return 'x'
}

export const getNewSquaresArray = (squaresArray: string[], currentPlayer: Player, chosenSquare: number): string[] => {
  const newSquaresArray = [...squaresArray]
  newSquaresArray[chosenSquare] = currentPlayer

  return newSquaresArray
}

export const checkGame = (squaresArray: string[]): [boolean, number] => {
  let isGameOver = false
  let winningLine = -1

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winningConditions.length; i += 1) {
    const winCondition = winningConditions[i]

    const a = squaresArray[winCondition[0]]
    const b = squaresArray[winCondition[1]]
    const c = squaresArray[winCondition[2]]

    const isRowEmpty = a === '' || b === '' || c === ''

    if (!isRowEmpty && a === b && b === c) {
      isGameOver = true
      winningLine = i
      break
    }
  }

  return [isGameOver, winningLine]
}

export const getGameResult = (winner: Player | ''): string => {
  if (winner !== '') {
    return `Player ${winner} is the winner`
  }
  return 'The Game ended in a draw'
}
