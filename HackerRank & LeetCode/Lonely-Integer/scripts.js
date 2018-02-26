var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var nums = input[1].split(' ').map(elem => {
  return Number(elem);
}).sort((a, b) => {
  return a - b;
})

var result = {};

for (var val of nums) {
  result[val] = result[val] == undefined ? 1 : result[val] += 1;
}

for (var value in result) {
  if (result[value] === 1) {
    console.log(value);   
  }
}