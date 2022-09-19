import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox.jsx';
import QuoteBtn from './components/QuoteBtn';
import quotes from './json/quotes.json';
import color from './utils/color';

// Hacer la informacion dinamica en el jsx se usa la etiquera style={{}}
function App() {
// Esta funcion calcula un indice random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length) //Math.floor nos redondea la cantidad del valor del arreglo
  
  // Aqui se extrae el Elemento segun el indice random
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]
  
  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setRandomColor] = useState(firstColor);

  const backgroundObject = {
    backgroundColor: randomColor
  }
  // esta funcion calcula tanto un quote como un random
  const getRandomAll = () =>{
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
