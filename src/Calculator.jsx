import { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(null)
  const [isScientific, setIsScientific] = useState(true)
  const [angleMode, setAngleMode] = useState('deg')

  const clear = () => {
    setCurrentOperand('0')
    setPreviousOperand('')
    setOperation(null)
  }

  const deleteDigit = () => {
    if (currentOperand.length === 1) {
      setCurrentOperand('0')
    } else {
      setCurrentOperand(currentOperand.slice(0, -1))
    }
  }

  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return
    if (currentOperand === '0' && number !== '.') {
      setCurrentOperand(number)
    } else {
      setCurrentOperand(currentOperand + number)
    }
  }

  const chooseOperation = (op) => {
    if (currentOperand === '') return
    if (previousOperand !== '') {
      compute()
    }
    setOperation(op)
    setPreviousOperand(currentOperand)
    setCurrentOperand('0')
  }

  const toRadians = (angle) => {
    return angleMode === 'deg' ? (angle * Math.PI) / 180 : angle
  }

  const scientificFunction = (func) => {
    const current = parseFloat(currentOperand)
    if (isNaN(current)) return

    let result
    switch (func) {
      case 'sin':
        result = Math.sin(toRadians(current))
        break
      case 'cos':
        result = Math.cos(toRadians(current))
        break
      case 'tan':
        result = Math.tan(toRadians(current))
        break
      case 'log':
        result = Math.log10(current)
        break
      case 'ln':
        result = Math.log(current)
        break
      case 'sqrt':
        result = Math.sqrt(current)
        break
      case 'x²':
        result = current * current
        break
      case 'x³':
        result = current * current * current
        break
      case '1/x':
        if (current === 0) {
          alert('Cannot divide by zero!')
          return
        }
        result = 1 / current
        break
      case 'e^x':
        result = Math.exp(current)
        break
      case '10^x':
        result = Math.pow(10, current)
        break
      case 'abs':
        result = Math.abs(current)
        break
      case 'π':
        result = Math.PI
        break
      case 'e':
        result = Math.E
        break
      case '!':
        if (current < 0 || !Number.isInteger(current)) {
          alert('Factorial only works for non-negative integers!')
          return
        }
        result = factorial(current)
        break
      default:
        return
    }

    setCurrentOperand(result.toString())
    setPreviousOperand('')
    setOperation(null)
  }

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  const compute = () => {
    let computation
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if (isNaN(prev) || isNaN(current)) return

    switch (operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '×':
        computation = prev * current
        break
      case '÷':
        if (current === 0) {
          alert('Cannot divide by zero!')
          return
        }
        computation = prev / current
        break
      case '%':
        computation = prev % current
        break
      case '^':
        computation = Math.pow(prev, current)
        break
      default:
        return
    }

    setCurrentOperand(computation.toString())
    setOperation(null)
    setPreviousOperand('')
  }

  const formatNumber = (number) => {
    if (number === '') return '0'
    const [integer, decimal] = number.split('.')
    const formattedInteger = parseFloat(integer).toLocaleString('en')
    return decimal !== undefined ? `${formattedInteger}.${decimal}` : formattedInteger
  }

  return (
    <div className="calculator scientific">
      <div className="display">
        <div className="mode-indicator">
          <span className={angleMode === 'deg' ? 'active' : ''} onClick={() => setAngleMode('deg')}>DEG</span>
          <span className={angleMode === 'rad' ? 'active' : ''} onClick={() => setAngleMode('rad')}>RAD</span>
        </div>
        <div className="previous-operand">
          {previousOperand && `${formatNumber(previousOperand)} ${operation || ''}`}
        </div>
        <div className="current-operand">
          {formatNumber(currentOperand)}
        </div>
      </div>
      <div className="buttons scientific-buttons">
        <button className="btn btn-function" onClick={() => scientificFunction('sin')}>sin</button>
        <button className="btn btn-function" onClick={() => scientificFunction('cos')}>cos</button>
        <button className="btn btn-function" onClick={() => scientificFunction('tan')}>tan</button>
        <button className="btn btn-clear" onClick={clear}>AC</button>
        <button className="btn btn-delete" onClick={deleteDigit}>DEL</button>

        <button className="btn btn-function" onClick={() => scientificFunction('log')}>log</button>
        <button className="btn btn-function" onClick={() => scientificFunction('ln')}>ln</button>
        <button className="btn btn-function" onClick={() => scientificFunction('sqrt')}>√</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('^')}>x^y</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('%')}>%</button>

        <button className="btn btn-function" onClick={() => scientificFunction('x²')}>x²</button>
        <button className="btn btn-function" onClick={() => scientificFunction('x³')}>x³</button>
        <button className="btn btn-function" onClick={() => scientificFunction('1/x')}>1/x</button>
        <button className="btn btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn btn-number" onClick={() => appendNumber('8')}>8</button>

        <button className="btn btn-function" onClick={() => scientificFunction('e^x')}>e^x</button>
        <button className="btn btn-function" onClick={() => scientificFunction('10^x')}>10^x</button>
        <button className="btn btn-function" onClick={() => scientificFunction('abs')}>|x|</button>
        <button className="btn btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('÷')}>÷</button>

        <button className="btn btn-function" onClick={() => scientificFunction('π')}>π</button>
        <button className="btn btn-function" onClick={() => scientificFunction('e')}>e</button>
        <button className="btn btn-function" onClick={() => scientificFunction('!')}>n!</button>
        <button className="btn btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn btn-number" onClick={() => appendNumber('5')}>5</button>

        <button className="btn btn-operator" onClick={() => chooseOperation('+')}>+</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('-')}>-</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('×')}>×</button>
        <button className="btn btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn btn-number" onClick={() => appendNumber('1')}>1</button>

        <button className="btn btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn btn-number btn-zero" onClick={() => appendNumber('0')}>0</button>
        <button className="btn btn-equals" onClick={compute}>=</button>
      </div>
    </div>
  )
}

export default Calculator
