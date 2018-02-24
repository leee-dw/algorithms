var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var sticks = input[1].split(' ').map(elem => {
  return Number(elem);
})

var min = input[1].split(' ').map(elem => {
  return Number(elem);
}).sort(function (a, b) {
  return a - b;
})[0]

var arr = [];

if (arr.length !== 0 || arr.length !== 1) {
  for (var i = 0; i < sticks.length; i++) {
    if (sticks[i] - min > 0) {
      console.log(arr.push(sticks[i] - min));
    };
  }
}