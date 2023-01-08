import React,{useState} from "react";
import Board from "./components/Board"
import { calculateWinner } from "./winnerCal";
import History from "./components/History"
import StatusMessage from "./components/StatusMessage";

const New_Game = [{board: Array(9).fill(null),isXNext:true}];

 const App = () =>{

  const [history, setHistory]=useState(New_Game);
 // console.log(history)
  const [currentMove, setCurrentMove]=useState(0);
  const current=history[currentMove]

  const {winner,winnerSquares} = calculateWinner(current.board);


  const handleOnClick=(position)=>{

    if(current.board[position] || winner){
      return;
    }
    setHistory((prev)=>{           // callback fn receive previous value as argument

      const last=prev[prev.length-1]

      const newBoard =  last.board.map((square,pos)=>{
        if(pos===position){
          return last.isXNext? "X":'O';
        }
        return square;
        
      });

      return prev.concat({board:newBoard,isXNext:!last.isXNext})
    }); 
    setCurrentMove(prev=>prev+1)
  };

const moveTo = (move)=>{
        setCurrentMove(move)
}

const newGame = ()=>{
       setHistory(New_Game)
       setCurrentMove(0)
}

  return(
  <div className="app">
    <h1> Tic Tac Toe</h1>
   <StatusMessage winner = {winner} current={current}/>
    
    <Board handleOnClick={handleOnClick} board={current.board} winningSquares={winnerSquares}/>
    <button type="button" onClick={newGame}>New Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
);
  }
console.log("In App")

export default App;
