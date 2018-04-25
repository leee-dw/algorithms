var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[2].split(' ');
console.log(arr.indexOf(input[0]));