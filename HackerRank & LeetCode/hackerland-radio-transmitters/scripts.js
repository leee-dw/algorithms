var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var spot = input[1].split(' ').sort((a, b) => {return a - b}).map(elem => {return Number(elem)})
var range = Number(input[0].split(' ')[1])
console.log(spot);

console.log(Math.ceil((spot[spot.length - 1] - spot[0]) / ((range * 2) + 1)));