var input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
var length = input[0];
var inputs = input[1].split(' ');
var nums = [];

var plus = [];
var minus = [];
var zero = [];

for (var i = 0; i < inputs.length; i++) {
  nums.push(Number(inputs[i]));
  if (nums[i] > 0) {
    plus.push(i)
  } else if (nums[i] < 0) {
    minus.push(i)
  } else {
    zero.push(i)
  }
}

console.log((plus.length / length).toFixed(6));
console.log((minus.length / length).toFixed(6));
console.log((zero.length / length).toFixed(6));