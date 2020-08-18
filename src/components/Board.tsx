import React from 'react'
import Square from './Square'

import './Board.scss'

type BoardProps = {
  squaresArray: string[]
  onSquareClick(index: number): void
  winningLine: number | null
}

const Board: React.FC<BoardProps> = ({ squaresArray, onSquareClick, winningLine }) => {
  return (
    <>
      <div className={`win${winningLine}`} />
      <div className="board">
        {squaresArray.map((square, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <Square key={index} value={square} onClick={() => onSquareClick(index)} />
        })}
      </div>
    </>
  )
}

export default Board
