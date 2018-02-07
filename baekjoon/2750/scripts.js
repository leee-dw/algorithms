var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var len = input.shift();
var arr = [];

for (var i = 0; i < len; i++) {
  arr.push(Number(input[i]));
}

var ans = arr.sort(function (a, b) {
  return a - b;
})

for (var i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}