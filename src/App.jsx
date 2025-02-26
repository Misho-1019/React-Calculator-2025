
import './App.css'

function App() {

  return (
    <>
      <div class="calculator">
        <input type="text" id="display" class="display" disabled />
        <div class="buttons">
          <button class="button" onclick="appendNumber('7')">7</button>
          <button class="button" onclick="appendNumber('8')">8</button>
          <button class="button" onclick="appendNumber('9')">9</button>
          <button class="button operator" onclick="appendOperator('/')">/</button>

          <button class="button" onclick="appendNumber('4')">4</button>
          <button class="button" onclick="appendNumber('5')">5</button>
          <button class="button" onclick="appendNumber('6')">6</button>
          <button class="button operator" onclick="appendOperator('*')">*</button>

          <button class="button" onclick="appendNumber('1')">1</button>
          <button class="button" onclick="appendNumber('2')">2</button>
          <button class="button" onclick="appendNumber('3')">3</button>
          <button class="button operator" onclick="appendOperator('-')">-</button>

          <button class="button" onclick="appendNumber('0')">0</button>
          <button class="button" onclick="appendDot()">.</button>
          <button class="button equals" onclick="calculateResult()">=</button>
          <button class="button operator" onclick="appendOperator('+')">+</button>
        </div>
        <button class="clear" onclick="clearDisplay()">AC</button>
      </div>

    </>
  )
}

export default App
