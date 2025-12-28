# Test Repository

This repository contains multiple calculator applications for demonstration purposes.

## Applications

### 1. Calculator App (JavaScript)

A beautiful, responsive web-based calculator application built with HTML, CSS, and JavaScript.

**Features:**
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Modulo operation support
- Clean and modern user interface
- Responsive design that works on all devices
- Keyboard support for quick calculations
- Division by zero protection
- Decimal number support
- Number formatting with thousand separators

**Usage:**
Simply open `index.html` in your web browser and click the buttons to perform calculations.

### 2. Quadratic Equation Solver (Go)

A web-based quadratic equation solver built with Go that solves equations of the form **ax² + bx + c = 0**.

**Features:**
- Solves quadratic equations with real or complex roots
- Handles linear equations (when a = 0)
- Calculates and displays the discriminant
- Beautiful, responsive web interface
- Detailed explanation of results
- Supports positive, negative, and zero discriminants

**Installation:**

1. Make sure you have Go installed (version 1.21 or higher)
2. Navigate to the repository directory
3. Run the application:
   ```bash
   go run main.go
   ```
4. Open your browser and navigate to `http://localhost:8080`

**Building the Application:**

To build a standalone executable:
```bash
go build -o quadratic-solver main.go
./quadratic-solver
```

**How It Works:**

The quadratic equation solver uses the quadratic formula to find the roots:

- **Discriminant (Δ)**: Δ = b² - 4ac
  - If Δ > 0: Two distinct real roots
  - If Δ = 0: One repeated real root
  - If Δ < 0: Two complex conjugate roots

**Example Usage:**

1. Enter coefficient values:
   - a = 1, b = -3, c = 2 → Roots: x₁ = 2, x₂ = 1
   - a = 1, b = -2, c = 1 → Root: x = 1 (repeated)
   - a = 1, b = 0, c = 1 → Complex roots: x = ±i

## Technical Details

### JavaScript Calculator
- Pure JavaScript implementation with no external dependencies
- Object-oriented design using ES6 classes
- Event-driven architecture
- Responsive CSS Grid layout

### Go Quadratic Solver
- Built with Go standard library (no external dependencies)
- HTTP server with HTML templating
- Mathematical computation using Go's math package
- RESTful form handling

## Browser Compatibility

Both applications work on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Repository Structure

```
.
├── index.html              # JavaScript calculator HTML
├── script.js               # JavaScript calculator logic
├── style.css               # JavaScript calculator styles
├── main.go                 # Go quadratic solver backend
├── go.mod                  # Go module definition
├── templates/
│   └── index.html         # Go quadratic solver HTML template
└── README.md              # This file
```
