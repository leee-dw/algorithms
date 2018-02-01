var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var arr = input[1].split(' ');
var max = Math.max.apply(null, arr);
var res = 0;

for (var i = 0; i < arr.length; i++) {
  res += arr[i] / max * 100;
}

console.log(res / input[0]);