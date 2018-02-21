var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = [];
for (var i = 1; i <= input[0]; i++) {
  arr.push(input[i])
}

arr.sort(function (a, b) {
  return a - b;
})

console.log(arr.join('\n'));