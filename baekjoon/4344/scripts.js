var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = [];
var arr2 = [];
var sum = 0;


for (var i = 1; i < input.length; i++) {
  arr = input[i].split(' ');
}

console.log(arr);
