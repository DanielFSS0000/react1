import React from 'react'
import QuoteBtn from './QuoteBtn'
const QuoteBox = ({randomQuote, randomColor,getRandomAll}) => {

    const colorObj = {
        color: randomColor
    }    

  return (
    <article style={colorObj} className='card'>
        
        <p className='card-quote'>
          <i className="fa-solid fa-quote-left">  </i>  {randomQuote.quote} <i className="fa-solid fa-quote-right">
          </i>
        </p> 
        
        <p>- <i>{randomQuote.author}</i></p>
        <QuoteBtn random={getRandomAll} color={randomColor}/>
    </article>

  )
}

export default QuoteBox