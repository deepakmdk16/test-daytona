# Scientific Calculator App

A beautiful, responsive scientific calculator web application built with React and Vite, supporting both basic arithmetic and advanced scientific calculations.

## Features

### Basic Operations
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Modulo operation support
- Power operations (x^y)
- Decimal number support
- Number formatting with thousand separators
- Real-time calculation display

### Scientific Functions
- **Trigonometric Functions**: sin, cos, tan with DEG/RAD mode support
- **Logarithmic Functions**: log (base 10), ln (natural logarithm)
- **Exponential Functions**: e^x, 10^x
- **Power Functions**: x², x³, x^y (custom power)
- **Root Functions**: √ (square root)
- **Special Functions**:
  - 1/x (reciprocal)
  - |x| (absolute value)
  - n! (factorial)
- **Constants**: π (pi), e (Euler's number)

### UI/UX Features
- Clean and modern user interface with glassmorphism design
- Responsive design that works on all devices
- Angle mode switcher (DEG/RAD) for trigonometric functions
- Division by zero protection
- Input validation for special functions

## Operations

### Basic Operations
- **AC (All Clear)**: Clears all input and resets the calculator
- **DEL (Delete)**: Removes the last entered digit
- **÷, ×, -, +**: Basic arithmetic operations
- **= (Equals)**: Computes the result
- **% (Modulo)**: Calculates the remainder of division
- **x^y**: Raises x to the power of y

### Scientific Operations
- **sin, cos, tan**: Trigonometric functions (respects DEG/RAD mode)
- **log**: Logarithm base 10
- **ln**: Natural logarithm
- **√**: Square root
- **x², x³**: Square and cube operations
- **1/x**: Reciprocal
- **e^x, 10^x**: Exponential functions
- **|x|**: Absolute value
- **π, e**: Mathematical constants
- **n!**: Factorial (non-negative integers only)

## Technical Stack

- **React 19**: Modern UI library
- **Vite 7**: Fast build tool and dev server
- **CSS3**: Responsive design with glassmorphism effects
- **Node.js 20+**: Runtime environment

## Getting Started

### Development

1. Clone the repository:
```bash
git clone https://github.com/deepakmdk16/test-daytona.git
cd test-daytona
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Docker Deployment

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t calculator-app .

# Run the container
docker run -p 8080:8080 calculator-app
```

The application will be available at `http://localhost:8080`

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
