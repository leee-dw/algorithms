var input = require('fs').readFileSync('/dev/stdin').toString();

if (input >= 1 && input <= 9) {
  for (var i = 1; i <= 9; i++) {
    console.log(Number(input) + " * " + i + " = " + input * i);
  }
}