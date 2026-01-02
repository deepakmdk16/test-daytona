# Calculator App

A beautiful, responsive calculator web application built with React and Vite.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Modulo operation support
- Clean and modern user interface with gradient design
- Responsive design that works on all devices
- Keyboard support for quick calculations
- Division by zero protection
- Decimal number support
- Number formatting with thousand separators
- Built with React hooks for state management
- Optimized production build with Vite

## Technology Stack

- React 18
- Vite 6
- Modern ES6+ JavaScript
- CSS3 with gradients and animations

## Usage

### Mouse/Touch Input
Click the buttons to perform calculations.

### Keyboard Input
- **Numbers**: Type 0-9
- **Decimal**: Type `.` (period)
- **Operations**: Type `+`, `-`, `*`, `/`, or `%`
- **Calculate**: Press `Enter` or `=`
- **Clear**: Press `Escape`
- **Delete**: Press `Backspace`

## Operations

- **AC (All Clear)**: Clears all input and resets the calculator
- **DEL (Delete)**: Removes the last entered digit
- **% (Modulo)**: Calculates the remainder of division
- **÷ (Division)**: Divides numbers
- **× (Multiplication)**: Multiplies numbers
- **- (Subtraction)**: Subtracts numbers
- **+ (Addition)**: Adds numbers
- **= (Equals)**: Computes the result

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
docker build -t calculator-app .
```

### Running the Docker Container

```bash
docker run -p 8080:8080 calculator-app
```

The app will be available at http://localhost:8080

### Docker Features
- Multi-stage build for optimized image size
- Uses Node.js 20 slim image
- Serves static files with `serve`
- Configured for Cloud Run deployment with PORT environment variable support

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT
