package main

import (
	"fmt"
	"html/template"
	"math"
	"net/http"
	"strconv"
)

type QuadraticResult struct {
	A              float64
	B              float64
	C              float64
	HasSolution    bool
	IsLinear       bool
	RealRoots      bool
	Root1          float64
	Root2          float64
	RealPart       float64
	ImaginaryPart  float64
	Error          string
	Discriminant   float64
	ShowResults    bool
}

func solveQuadratic(a, b, c float64) QuadraticResult {
	result := QuadraticResult{
		A:           a,
		B:           b,
		C:           c,
		ShowResults: true,
	}

	// Check if it's a linear equation (a = 0)
	if a == 0 {
		result.IsLinear = true
		if b == 0 {
			if c == 0 {
				result.Error = "Infinite solutions (0 = 0)"
			} else {
				result.Error = "No solution (inconsistent equation)"
			}
			result.HasSolution = false
		} else {
			result.HasSolution = true
			result.Root1 = -c / b
			result.RealRoots = true
		}
		return result
	}

	// Calculate discriminant
	discriminant := b*b - 4*a*c
	result.Discriminant = discriminant
	result.HasSolution = true

	if discriminant > 0 {
		// Two distinct real roots
		result.RealRoots = true
		sqrtDiscriminant := math.Sqrt(discriminant)
		result.Root1 = (-b + sqrtDiscriminant) / (2 * a)
		result.Root2 = (-b - sqrtDiscriminant) / (2 * a)
	} else if discriminant == 0 {
		// One real root (repeated)
		result.RealRoots = true
		result.Root1 = -b / (2 * a)
		result.Root2 = result.Root1
	} else {
		// Complex roots
		result.RealRoots = false
		result.RealPart = -b / (2 * a)
		result.ImaginaryPart = math.Sqrt(-discriminant) / (2 * a)
	}

	return result
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		tmpl := template.Must(template.ParseFiles("templates/index.html"))
		tmpl.Execute(w, QuadraticResult{ShowResults: false})
		return
	}

	if r.Method == "POST" {
		r.ParseForm()

		a, errA := strconv.ParseFloat(r.FormValue("a"), 64)
		b, errB := strconv.ParseFloat(r.FormValue("b"), 64)
		c, errC := strconv.ParseFloat(r.FormValue("c"), 64)

		result := QuadraticResult{ShowResults: true}

		if errA != nil || errB != nil || errC != nil {
			result.Error = "Invalid input: Please enter valid numbers"
			result.HasSolution = false
			tmpl := template.Must(template.ParseFiles("templates/index.html"))
			tmpl.Execute(w, result)
			return
		}

		result = solveQuadratic(a, b, c)
		tmpl := template.Must(template.ParseFiles("templates/index.html"))
		tmpl.Execute(w, result)
	}
}

func main() {
	http.HandleFunc("/", homeHandler)

	fmt.Println("🚀 Quadratic Equation Solver Server Starting...")
	fmt.Println("📊 Server running at http://localhost:8080")
	fmt.Println("Press Ctrl+C to stop the server")

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Printf("Error starting server: %v\n", err)
	}
}
