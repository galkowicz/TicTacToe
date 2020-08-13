import React from 'react'

import './Square.scss'

type SquareProps = {
  value: string
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
