var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var res = input[0] * input[1] * input[2]
var ans = res.toString().split('').map(function (elem) {
  return Number(elem);
}).sort();