import React,{useState} from "react";
import Board from "./components/Board"
import { calculateWinner } from "./winnerCal";
import History from "./components/History"
import StatusMessage from "./components/StatusMessage";

 const App = () =>{

  const [history, setHistory]=useState([{board: Array(9).fill(null),isXNext:true}]);
 // console.log(history)
  const [currentMove, setCurrentMove]=useState(0);
  const current=history[currentMove]

  const winner = calculateWinner(current.board);


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

  return(
  <div className="app">
    <h1> Tic Tac Toe</h1>
   <StatusMessage winner = {winner} current={current}/>
    
    <Board handleOnClick={handleOnClick} board={current.board}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  </div>
);
  }
console.log("In App")

export default App;
