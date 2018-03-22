var input = Number(require('fs').readFileSync('/dev/stdin').toString());

function fibonacci(num) {
  return num === 1 || num === 2 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(input));