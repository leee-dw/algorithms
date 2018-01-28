var input = require('fs').readFileSync('/dev/stdin').toString();
var nums = input.split(' ');

var a = Number(nums[0]);
var b = Number(nums[1]);
var c = Number(nums[2]);

console.log((a + b) % c);
console.log((a % c + b % c) % c);
console.log((a * b) % c);
console.log((a % c * b % c) % c);