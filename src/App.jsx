
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const clickHandler = (value) => {
    setInput(input + value)
  }

  const clearHandler = () => {
    setInput('')
    setResult('')
  }

  return (
    <>
      <div className="calculator">
        <div className="display">
          <div className="input">{input || 0}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button className="button" onClick={() => clickHandler('7')}>7</button>
          <button className="button" onClick={() => clickHandler('8')}>8</button>
          <button className="button" onClick={() => clickHandler('9')}>9</button>
          <button className="button operator" >/</button>

          <button className="button" onClick={() => clickHandler('4')}>4</button>
          <button className="button" onClick={() => clickHandler('5')}>5</button>
          <button className="button" onClick={() => clickHandler('6')}>6</button>
          <button className="button operator" >*</button>

          <button className="button" onClick={() => clickHandler('1')}>1</button>
          <button className="button" onClick={() => clickHandler('2')}>2</button>
          <button className="button" onClick={() => clickHandler('3')}>3</button>
          <button className="button operator" >-</button>

          <button className="button" onClick={() => clickHandler('0')}>0</button>
          {/* <button className="button" onClick="appendDot()">.</button> */}
          <button className="button equals" >=</button>
          <button className="button operator" >+</button>
        </div>
        <button className="clear" onClick={clearHandler}>AC</button>
      </div>

    </>
  )
}

export default App
