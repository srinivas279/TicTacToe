import React from 'react'
import "../styles/root.scss"

const Square = (props) => {
  return (
    <button 
    type="button" 

     onClick={props.onClick}
     className={ `square ${props.isWinningSquare ? 'winning':' '}
      ${props.value==='X'? 'text-green':'text-orange'}`}
      > {props.value} </button>
  )
}
console.log("in square")

export default Square
