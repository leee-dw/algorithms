var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(function (elem) {
  return Number(elem);
});
var sum = 0;

input.forEach(function (elem) {
  if (elem < 40) {
    elem = 40;
  }
  sum += elem;
})

console.log(sum / 5);