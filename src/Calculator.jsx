import { useState } from 'react'
import './Calculator.css'
import QuadraticSolver from './QuadraticSolver'

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(null)
  const [showQuadratic, setShowQuadratic] = useState(false)
  const [memory, setMemory] = useState(0)

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
    setCurrentOperand('')
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
      case 'xʸ':
        computation = Math.pow(prev, current)
        break
      default:
        return
    }

    setCurrentOperand(computation.toString())
    setOperation(null)
    setPreviousOperand('')
  }

  // Scientific functions
  const calculateScientific = (func) => {
    const current = parseFloat(currentOperand)
    if (isNaN(current)) return

    let result
    try {
      switch (func) {
        case 'sin':
          result = Math.sin(current)
          break
        case 'cos':
          result = Math.cos(current)
          break
        case 'tan':
          result = Math.tan(current)
          break
        case 'log':
          if (current <= 0) {
            alert('Logarithm undefined for non-positive numbers!')
            return
          }
          result = Math.log10(current)
          break
        case 'ln':
          if (current <= 0) {
            alert('Natural logarithm undefined for non-positive numbers!')
            return
          }
          result = Math.log(current)
          break
        case 'sqrt':
          if (current < 0) {
            alert('Square root of negative number!')
            return
          }
          result = Math.sqrt(current)
          break
        case 'x²':
          result = Math.pow(current, 2)
          break
        case 'x³':
          result = Math.pow(current, 3)
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
        case '!':
          if (current < 0 || !Number.isInteger(current)) {
            alert('Factorial only works with non-negative integers!')
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
    } catch (error) {
      alert('Calculation error!')
    }
  }

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    if (n > 170) {
      alert('Number too large for factorial!')
      return Infinity
    }
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  const insertConstant = (constant) => {
    switch (constant) {
      case 'π':
        setCurrentOperand(Math.PI.toString())
        break
      case 'e':
        setCurrentOperand(Math.E.toString())
        break
    }
  }

  const toggleSign = () => {
    if (currentOperand === '0') return
    if (currentOperand.startsWith('-')) {
      setCurrentOperand(currentOperand.slice(1))
    } else {
      setCurrentOperand('-' + currentOperand)
    }
  }

  // Memory functions
  const memoryClear = () => setMemory(0)
  const memoryRecall = () => setCurrentOperand(memory.toString())
  const memoryAdd = () => {
    const current = parseFloat(currentOperand)
    if (!isNaN(current)) {
      setMemory(memory + current)
    }
  }
  const memorySubtract = () => {
    const current = parseFloat(currentOperand)
    if (!isNaN(current)) {
      setMemory(memory - current)
    }
  }
  const memoryStore = () => {
    const current = parseFloat(currentOperand)
    if (!isNaN(current)) {
      setMemory(current)
    }
  }

  const clear = () => {
    setCurrentOperand('0')
    setPreviousOperand('')
    setOperation(null)
  }

  const deleteNumber = () => {
    if (currentOperand.length === 1) {
      setCurrentOperand('0')
    } else {
      setCurrentOperand(currentOperand.slice(0, -1))
    }
  }

  const formatNumber = (number) => {
    if (number === '') return ''
    const numStr = number.toString()
    if (numStr.includes('e')) return numStr // Scientific notation
    const [integer, decimal] = numStr.split('.')
    const formattedInteger = parseFloat(integer).toLocaleString('en', {
      maximumFractionDigits: 0
    })
    return decimal != null ? `${formattedInteger}.${decimal}` : formattedInteger
  }

  const handleKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') appendNumber(e.key)
    if (e.key === '.') appendNumber(e.key)
    if (e.key === '+' || e.key === '-') chooseOperation(e.key)
    if (e.key === '*') chooseOperation('×')
    if (e.key === '/') {
      e.preventDefault()
      chooseOperation('÷')
    }
    if (e.key === '%') chooseOperation('%')
    if (e.key === '^') chooseOperation('^')
    if (e.key === 'Enter' || e.key === '=') compute()
    if (e.key === 'Escape') clear()
    if (e.key === 'Backspace') deleteNumber()
  }

  if (showQuadratic) {
    return <QuadraticSolver onBack={() => setShowQuadratic(false)} />
  }

  return (
    <div className="calculator scientific" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="display">
        <div className="memory-indicator">
          {memory !== 0 && <span className="memory-badge">M: {memory}</span>}
        </div>
        <div className="previous-operand">
          {formatNumber(previousOperand)} {operation}
        </div>
        <div className="current-operand">
          {formatNumber(currentOperand)}
        </div>
      </div>

      <div className="buttons scientific-grid">
        {/* Row 1: Memory and Special Functions */}
        <button className="btn btn-memory" onClick={memoryClear}>MC</button>
        <button className="btn btn-memory" onClick={memoryRecall}>MR</button>
        <button className="btn btn-memory" onClick={memoryStore}>MS</button>
        <button className="btn btn-memory" onClick={memoryAdd}>M+</button>
        <button className="btn btn-memory" onClick={memorySubtract}>M-</button>

        {/* Row 2: Trigonometric Functions */}
        <button className="btn btn-function" onClick={() => calculateScientific('sin')}>sin</button>
        <button className="btn btn-function" onClick={() => calculateScientific('cos')}>cos</button>
        <button className="btn btn-function" onClick={() => calculateScientific('tan')}>tan</button>
        <button className="btn btn-function" onClick={() => calculateScientific('log')}>log</button>
        <button className="btn btn-function" onClick={() => calculateScientific('ln')}>ln</button>

        {/* Row 3: Power and Root Functions */}
        <button className="btn btn-function" onClick={() => calculateScientific('sqrt')}>√x</button>
        <button className="btn btn-function" onClick={() => calculateScientific('x²')}>x²</button>
        <button className="btn btn-function" onClick={() => calculateScientific('x³')}>x³</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('xʸ')}>xʸ</button>
        <button className="btn btn-function" onClick={() => calculateScientific('10^x')}>10ˣ</button>

        {/* Row 4: Advanced Functions */}
        <button className="btn btn-function" onClick={() => calculateScientific('e^x')}>eˣ</button>
        <button className="btn btn-function" onClick={() => calculateScientific('1/x')}>1/x</button>
        <button className="btn btn-function" onClick={() => calculateScientific('abs')}>|x|</button>
        <button className="btn btn-function" onClick={() => calculateScientific('!')}>n!</button>
        <button className="btn btn-special" onClick={() => setShowQuadratic(true)}>ax²+bx+c</button>

        {/* Row 5: Constants and Clear */}
        <button className="btn btn-constant" onClick={() => insertConstant('π')}>π</button>
        <button className="btn btn-constant" onClick={() => insertConstant('e')}>e</button>
        <button className="btn btn-clear" onClick={clear}>AC</button>
        <button className="btn btn-delete" onClick={deleteNumber}>DEL</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('%')}>%</button>

        {/* Row 6-9: Standard Calculator Layout */}
        <button className="btn btn-operator" onClick={toggleSign}>+/-</button>
        <button className="btn btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn btn-number" onClick={() => appendNumber('8')}>8</button>
        <button className="btn btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('÷')}>÷</button>

        <button className="btn btn-operator" onClick={() => chooseOperation('^')}>^</button>
        <button className="btn btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn btn-number" onClick={() => appendNumber('5')}>5</button>
        <button className="btn btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('×')}>×</button>

        <button className="btn btn-parenthesis">(</button>
        <button className="btn btn-number" onClick={() => appendNumber('1')}>1</button>
        <button className="btn btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('-')}>-</button>

        <button className="btn btn-parenthesis">)</button>
        <button className="btn btn-number" onClick={() => appendNumber('0')}>0</button>
        <button className="btn btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn btn-equals" onClick={compute}>=</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('+')}>+</button>
      </div>
    </div>
  )
}

export default Calculator
