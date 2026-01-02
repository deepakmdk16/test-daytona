# Calculator App

A beautiful, responsive calculator web application built with React and Vite.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Modulo operation support
- Clean and modern user interface with glassmorphism design
- Responsive design that works on all devices
- Division by zero protection
- Decimal number support
- Number formatting with thousand separators
- Real-time calculation display

## Operations

- **AC (All Clear)**: Clears all input and resets the calculator
- **DEL (Delete)**: Removes the last entered digit
- **% (Modulo)**: Calculates the remainder of division
- **÷ (Division)**: Divides numbers
- **× (Multiplication)**: Multiplies numbers
- **- (Subtraction)**: Subtracts numbers
- **+ (Addition)**: Adds numbers
- **= (Equals)**: Computes the result

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
