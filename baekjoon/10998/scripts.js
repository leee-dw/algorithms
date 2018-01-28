var input = require('fs').readFileSync('/dev/stdin').toString();

var a = Number(input.split(' ')[0]);
var b = Number(input.split(' ')[1]);

console.log(a * b);