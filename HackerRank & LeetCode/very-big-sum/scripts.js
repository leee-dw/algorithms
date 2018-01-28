var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var idx = input[1].split(' ')
var sum = 0;

for (var i = 0; i <= idx.length - 1 ; i++) {
  sum += Number(idx[i]);
}

console.log(sum);