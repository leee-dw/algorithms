var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((elem) => {
  return Number(elem);
})

console.log(input);
