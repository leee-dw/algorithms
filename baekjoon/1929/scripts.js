var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var arr = input.map(function (elem) {
  return Number(elem);
});

var arr2 = [];

for (var i = arr[0]; i <= arr[1]; i++) {
  for (var j = 1; j < arr[1]; j++) {
    if (i % j !== 0) {
      arr2.push(j)
    }
  }
}

console.log(arr2);
