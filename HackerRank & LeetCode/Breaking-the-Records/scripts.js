var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[1].split(' ').map(function (elem) {
  return Number(elem);
})

var highest = arr[0];
var lowest = arr[0];
var highRecord = 0;
var lowRecord = 0;

for (var i = 1; i < Number(input[0]); i++) {
  if (arr[i] > highest) {
    highest = arr[i];
    highRecord++;
  }
  if (arr[i] < lowest) {
    lowest = arr[i];
    lowRecord++;
  }
}

console.log(highRecord, lowRecord);

