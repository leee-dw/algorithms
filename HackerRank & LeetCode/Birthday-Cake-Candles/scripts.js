var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var length = Number(input[0]);
var inputs = input[1].split(' ');
var nums = [];
var count = 1;

for (var i = 0; i < length; i++) {
  nums.push(Number(inputs[i]));;
}


for (var i = 0; i < length - 1; i++) {
  if (
    nums.sort(function(a, b) { return b - a; })[i] === nums.sort(function(a, b) { return b - a; })[i + 1]) {
    count++;
  }
}
console.log(count);