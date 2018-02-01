var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

var arr = input.map(elem => {
  return Number(elem);
})

arr.sort(function (a, b) {
  return a - b;
})

var min = (arr[0] + arr[1] + arr[2] + arr[3])
var max = (arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3] + arr[arr.length - 4]);

console.log(min, max);
