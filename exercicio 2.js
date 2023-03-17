let numero = 10

let fibonacci = [0, 1]

if (fibonacci[fibonacci.length - 1] < numero) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
}

if (fibonacci.includes(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.")
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.")
}