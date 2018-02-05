var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var arr = input.map(function (elem) {
  return Number(elem);
})

console.log(arr[0] + arr[1]);
console.log(arr[0] - arr[1]);
console.log(arr[0] * arr[1]);
console.log(parseInt(arr[0] / arr[1]));
console.log(arr[0] % arr[1]);
