var input = require('fs').readFileSync('/dev/stdin').toString().split('')

var sum = Number(input[0]) + Number(input[1]);
var lastNum = Number(input[1]);

var result = lastNum + sum
var second = result.toString().split('')[1]
console.log(sum+second);




