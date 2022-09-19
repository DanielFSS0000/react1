import React from 'react'

const QuoteBtn = (props) => {

  return (
    <button  
        className="card-btn"
        style={{backgroundColor: props.color}}
        onClick={props.random}>
            <i className="fa-solid fa-shuffle"></i>
        </button>
  )
}

export default QuoteBtn