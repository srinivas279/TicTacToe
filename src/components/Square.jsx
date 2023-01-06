import React from 'react'
import "../styles/root.scss"

const Square = (props) => {
  return (
    <button type="button" className='square' onClick={props.onClick}>{props.value} </button>
  )
}
console.log("in square")

export default Square
