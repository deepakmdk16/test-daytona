import { useState } from 'react'
import './QuadraticSolver.css'

function QuadraticSolver({ onBack }) {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [result, setResult] = useState(null)

  const solveQuadratic = () => {
    const coeffA = parseFloat(a)
    const coeffB = parseFloat(b)
    const coeffC = parseFloat(c)

    if (isNaN(coeffA) || isNaN(coeffB) || isNaN(coeffC)) {
      alert('Please enter valid numbers for all coefficients!')
      return
    }

    if (coeffA === 0) {
      alert('Coefficient "a" cannot be zero for a quadratic equation!')
      return
    }

    // Calculate discriminant: b² - 4ac
    const discriminant = Math.pow(coeffB, 2) - 4 * coeffA * coeffC

    let solution = {
      discriminant: discriminant,
      vertex: {
        x: -coeffB / (2 * coeffA),
        y: coeffC - (Math.pow(coeffB, 2) / (4 * coeffA))
      },
      axisOfSymmetry: -coeffB / (2 * coeffA),
      roots: null,
      rootType: null
    }

    if (discriminant > 0) {
      // Two real and distinct roots
      const root1 = (-coeffB + Math.sqrt(discriminant)) / (2 * coeffA)
      const root2 = (-coeffB - Math.sqrt(discriminant)) / (2 * coeffA)
      solution.roots = { root1, root2 }
      solution.rootType = 'Two real and distinct roots'
    } else if (discriminant === 0) {
      // One real root (repeated)
      const root = -coeffB / (2 * coeffA)
      solution.roots = { root1: root, root2: root }
      solution.rootType = 'One real root (repeated)'
    } else {
      // Complex roots
      const realPart = -coeffB / (2 * coeffA)
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * coeffA)
      solution.roots = {
        root1: `${realPart} + ${imaginaryPart}i`,
        root2: `${realPart} - ${imaginaryPart}i`
      }
      solution.rootType = 'Two complex conjugate roots'
    }

    setResult(solution)
  }

  const clearForm = () => {
    setA('')
    setB('')
    setC('')
    setResult(null)
  }

  const formatNumber = (num) => {
    if (typeof num === 'number') {
      return num.toFixed(6).replace(/\.?0+$/, '')
    }
    return num
  }

  return (
    <div className="quadratic-solver">
      <div className="solver-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h2>Quadratic Equation Solver</h2>
      </div>

      <div className="solver-content">
        <div className="equation-display">
          <span className="equation-text">
            ax² + bx + c = 0
          </span>
        </div>

        <div className="input-section">
          <div className="input-group">
            <label htmlFor="coeff-a">Coefficient a:</label>
            <input
              id="coeff-a"
              type="number"
              step="any"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Enter a"
            />
          </div>

          <div className="input-group">
            <label htmlFor="coeff-b">Coefficient b:</label>
            <input
              id="coeff-b"
              type="number"
              step="any"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="Enter b"
            />
          </div>

          <div className="input-group">
            <label htmlFor="coeff-c">Coefficient c:</label>
            <input
              id="coeff-c"
              type="number"
              step="any"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="Enter c"
            />
          </div>
        </div>

        <div className="button-group">
          <button className="btn-solve" onClick={solveQuadratic}>
            Solve
          </button>
          <button className="btn-clear" onClick={clearForm}>
            Clear
          </button>
        </div>

        {result && (
          <div className="result-section">
            <h3>Solution:</h3>

            <div className="result-item">
              <strong>Equation:</strong>
              <p className="equation-text">
                {a}x² {parseFloat(b) >= 0 ? '+' : ''}{b}x {parseFloat(c) >= 0 ? '+' : ''}{c} = 0
              </p>
            </div>

            <div className="result-item">
              <strong>Discriminant (Δ):</strong>
              <p>{formatNumber(result.discriminant)}</p>
            </div>

            <div className="result-item">
              <strong>Root Type:</strong>
              <p>{result.rootType}</p>
            </div>

            <div className="result-item">
              <strong>Roots:</strong>
              <div className="roots">
                <p>x₁ = {formatNumber(result.roots.root1)}</p>
                <p>x₂ = {formatNumber(result.roots.root2)}</p>
              </div>
            </div>

            <div className="result-item">
              <strong>Vertex:</strong>
              <p>({formatNumber(result.vertex.x)}, {formatNumber(result.vertex.y)})</p>
            </div>

            <div className="result-item">
              <strong>Axis of Symmetry:</strong>
              <p>x = {formatNumber(result.axisOfSymmetry)}</p>
            </div>

            <div className="result-item">
              <strong>Graph Information:</strong>
              <p>Opens {parseFloat(a) > 0 ? 'upward ⌣' : 'downward ⌢'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuadraticSolver
