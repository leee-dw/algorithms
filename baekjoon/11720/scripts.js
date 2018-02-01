var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[1].split('');
var arr2 = [];
var result = 0;

for (var i = 0; i< arr.length; i++) {
  result += arr[i]
}

console.log(result);
