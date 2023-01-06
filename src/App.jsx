import React,{useState} from "react";
import Board from "./components/Board"
import { calculateWinner } from "./winnerCal";

 const App = () =>{

  const [board, setBoard]=useState( Array(9).fill(null));
  const [isXNext,setIsXNext]=useState(false);

  const winner = calculateWinner(board);

  const message= winner? `winner is ${winner}`: `Next Player is ${isXNext ? "X" : "O"}`

  const handleOnClick=(position)=>{

    if(board[position] || winner){
      return;
    }
    setBoard((prev)=>{           // callback fn receive previous value as argument
      return prev.map((square,pos)=>{
        if(pos===position){
          return isXNext?"X":'O';
        }
        return square;
        
      });
    }); 
    setIsXNext(prev=>!prev)
  };


  return(
  <div className="app">
    <h1> Tic Tac Toe</h1>
    <h3>{message}</h3>
    
    <Board handleOnClick={handleOnClick} board={board}/>
  </div>
);
  }
console.log("In App")

export default App;
