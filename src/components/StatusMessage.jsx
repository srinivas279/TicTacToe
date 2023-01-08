import React from 'react'

/**
 * 
 * const message= winner? `winner is ${winner}`:
 *  `Next Player is ${current.isXNext ? "X" : "O"}` 
 */

const StatusMessage = ({winner,current}) => {

    const noMovesLeft = current.board.every((el)=>el !== null)

  return (
    <h2>
        {winner && `Winner is ${winner}`}
        {!winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  )
}

export default StatusMessage
