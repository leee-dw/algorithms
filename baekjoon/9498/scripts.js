var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var score = Number(input);
var result = '';

if (score >= 90 && score <= 100) {
  result = 'A';
} else if (score >= 80 && score < 90) {
  result = 'B';
} else if (score >= 70 && score < 80) {
  result = 'C';
} else if (score >= 60 && score < 70) {
  result = 'D';
} else if (score >= 0 && score < 60) {
  result = 'F';
}

console.log(result)