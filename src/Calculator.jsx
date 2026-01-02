import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(null)

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
      default:
        return
    }

    setCurrentOperand(computation.toString())
    setOperation(null)
    setPreviousOperand('')
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
    const [integer, decimal] = number.split('.')
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
    if (e.key === 'Enter' || e.key === '=') compute()
    if (e.key === 'Escape') clear()
    if (e.key === 'Backspace') deleteNumber()
  }

  return (
    <div className="calculator" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="display">
        <div className="previous-operand">
          {formatNumber(previousOperand)} {operation}
        </div>
        <div className="current-operand">
          {formatNumber(currentOperand)}
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-clear" onClick={clear}>AC</button>
        <button className="btn btn-delete" onClick={deleteNumber}>DEL</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('%')}>%</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('÷')}>÷</button>

        <button className="btn btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn btn-number" onClick={() => appendNumber('8')}>8</button>
        <button className="btn btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('×')}>×</button>

        <button className="btn btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn btn-number" onClick={() => appendNumber('5')}>5</button>
        <button className="btn btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('-')}>-</button>

        <button className="btn btn-number" onClick={() => appendNumber('1')}>1</button>
        <button className="btn btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn btn-operator" onClick={() => chooseOperation('+')}>+</button>

        <button className="btn btn-number btn-zero" onClick={() => appendNumber('0')}>0</button>
        <button className="btn btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn btn-equals" onClick={compute}>=</button>
      </div>
    </div>
  )
}

export default Calculator
