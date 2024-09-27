let input = require("prompt-sync")();
let n = input("Informe um número:");

let fib = [0, 1];
for (let i = 0; i <= 100; i++) {
  if (i >= 2) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
}
if (fib.includes(Number(n))) {
  console.log(
    `Este é o ${fib.indexOf(Number(n)) + 1}° valor da sequência de Fibonacci`
  );
} else {
  console.log("Este valor não pertence a sequência de Fibonacci!");
}
