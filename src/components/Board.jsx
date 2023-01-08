import React, {useState} from 'react'
import Square from './Square'


const Board = ({handleOnClick,board,winningSquares}) => {

  const renderSquare=(position)=>{

    const isWinningSquare = winningSquares.includes(position)

         return (
         <Square 
         value={board[position] }
          onClick={()=>handleOnClick(position)}
          isWinningSquare={isWinningSquare}
            
         />)
  }

  return (
    <div className="board ">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>      

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

    </div>
  )
}

console.log("In Board")

export default Board
