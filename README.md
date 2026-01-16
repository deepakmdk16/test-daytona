# Scientific Calculator App

A powerful, feature-rich scientific calculator web application built with React and Vite. This advanced calculator includes support for complex mathematical operations including logarithmic functions, trigonometry, power operations, and a dedicated quadratic equation solver.

## Features

### Basic Operations
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Modulo operation support
- Power operations (x², x³, xʸ)
- Sign toggle (+/-)
- Decimal number support
- Number formatting with thousand separators

### Scientific Functions

#### Logarithmic Functions
- **log**: Base-10 logarithm (log₁₀)
- **ln**: Natural logarithm (logₑ)
- **eˣ**: Exponential function (e to the power of x)
- **10ˣ**: Power of 10 function

#### Trigonometric Functions
- **sin**: Sine function
- **cos**: Cosine function
- **tan**: Tangent function

#### Power and Root Functions
- **√x**: Square root
- **x²**: Square (x squared)
- **x³**: Cube (x cubed)
- **xʸ**: Power function (x to the power of y)
- **^**: Power operator

#### Advanced Functions
- **1/x**: Reciprocal function
- **|x|**: Absolute value
- **n!**: Factorial (for non-negative integers)
- **π**: Pi constant (3.14159...)
- **e**: Euler's number constant (2.71828...)

### Memory Functions
- **MC**: Memory Clear - Clears the memory
- **MR**: Memory Recall - Recalls the value from memory
- **MS**: Memory Store - Stores current value to memory
- **M+**: Memory Add - Adds current value to memory
- **M-**: Memory Subtract - Subtracts current value from memory

### Quadratic Equation Solver
A dedicated interface for solving quadratic equations of the form **ax² + bx + c = 0**

Features:
- Calculates discriminant (Δ = b² - 4ac)
- Determines root types:
  - Two real and distinct roots (Δ > 0)
  - One real root/repeated roots (Δ = 0)
  - Two complex conjugate roots (Δ < 0)
- Calculates vertex coordinates
- Determines axis of symmetry
- Shows parabola direction (opens upward or downward)
- Displays formatted equation
- Real and complex number support

## Technology Stack

- React 18
- Vite 6
- Modern ES6+ JavaScript
- CSS3 with gradients and animations
- Advanced mathematical computations using JavaScript Math API

## Usage

### Mouse/Touch Input
Click the buttons to perform calculations.

### Keyboard Input
- **Numbers**: Type 0-9
- **Decimal**: Type `.` (period)
- **Basic Operations**: Type `+`, `-`, `*`, `/`, or `%`
- **Power**: Type `^`
- **Calculate**: Press `Enter` or `=`
- **Clear**: Press `Escape`
- **Delete**: Press `Backspace`

### Scientific Function Usage

1. **Single-operand functions** (sin, cos, tan, log, ln, √x, x², x³, eˣ, 10ˣ, |x|, n!, 1/x):
   - Enter a number
   - Click the function button
   - Result is displayed immediately

2. **Two-operand functions** (xʸ, ^):
   - Enter first number
   - Click the operation button (xʸ or ^)
   - Enter second number
   - Press = to calculate

3. **Constants** (π, e):
   - Click the constant button
   - The value is inserted into the display
   - Use in calculations as needed

4. **Memory Operations**:
   - Perform calculation to get a value
   - MS: Store the value to memory
   - M+/M-: Add or subtract current value from memory
   - MR: Recall the memory value
   - MC: Clear the memory
   - Memory indicator shows "M: value" when memory is active

5. **Quadratic Equation Solver**:
   - Click the "ax²+bx+c" button
   - Enter coefficients a, b, and c
   - Click "Solve" to get comprehensive results
   - Click "Back" to return to calculator

## Operations Reference

### Basic Operations
- **AC (All Clear)**: Clears all input and resets the calculator
- **DEL (Delete)**: Removes the last entered digit
- **+/-**: Toggles the sign of the current number
- **% (Modulo)**: Calculates the remainder of division
- **÷ (Division)**: Divides numbers
- **× (Multiplication)**: Multiplies numbers
- **- (Subtraction)**: Subtracts numbers
- **+ (Addition)**: Adds numbers
- **= (Equals)**: Computes the result

### Scientific Operations
- **sin/cos/tan**: Trigonometric functions (input in radians)
- **log**: Common logarithm (base 10)
- **ln**: Natural logarithm (base e)
- **√x**: Square root of x
- **x²**: Square of x
- **x³**: Cube of x
- **xʸ**: x raised to the power of y
- **eˣ**: e raised to the power of x
- **10ˣ**: 10 raised to the power of x
- **1/x**: Reciprocal of x
- **|x|**: Absolute value of x
- **n!**: Factorial of n (n must be non-negative integer)

## Error Handling

The calculator includes comprehensive error handling:
- Division by zero prevention
- Logarithm domain validation (positive numbers only)
- Square root domain validation (non-negative numbers only)
- Factorial domain validation (non-negative integers only)
- Quadratic equation validation (coefficient 'a' cannot be zero)
- Factorial overflow protection (maximum n = 170)

## Development

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at http://localhost:8080

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Docker Deployment

The application includes a production-ready Dockerfile for containerized deployment.

### Building the Docker Image

```bash
docker build -t scientific-calculator-app .
```

### Running the Docker Container

```bash
docker run -p 8080:8080 scientific-calculator-app
```

The app will be available at http://localhost:8080

### Docker Features
- Multi-stage build for optimized image size
- Uses Node.js 20 slim image
- Serves static files with `serve`
- Configured for Cloud Run deployment with PORT environment variable support

## UI Design

- **Modern gradient design**: Beautiful color gradients throughout the interface
- **Responsive layout**: Adapts to all screen sizes (mobile, tablet, desktop)
- **Color-coded buttons**:
  - Light gray: Number buttons
  - Purple gradient: Basic operators
  - Cyan gradient: Scientific functions
  - Green gradient: Memory functions
  - Pink gradient: Constants (π, e)
  - Red gradient: Clear operations
  - Turquoise gradient: Equals button
- **Smooth animations**: Hover effects and button press feedback
- **Memory indicator**: Visual badge showing memory value when active
- **Scientific notation support**: Handles very large and very small numbers

## Mathematical Accuracy

- Uses JavaScript's built-in Math object for precision
- Supports scientific notation for extreme values
- Handles floating-point arithmetic
- Proper rounding and formatting for display
- Complex number support in quadratic solver

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Examples

### Basic Calculation
```
5 + 3 × 2 = 11
```

### Scientific Calculation
```
log(100) = 2
ln(e) = 1
sin(π/2) ≈ 1
```

### Power Operations
```
2^8 = 256
5² = 25
2³ = 8
```

### Quadratic Equation
```
For equation: 2x² - 4x - 6 = 0
Roots: x₁ = 3, x₂ = -1
Vertex: (1, -8)
```

## License

MIT
