var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[1].split('');
var arr2 = [];
var result = 0;


// console.log(arr);

for (var i = 0; i< arr.length; i++) {
  result += arr[i]
}

// for (var i = 0; i < arr2.length; i++) {
  // result += arr2[i]
// }
console.log(result);
