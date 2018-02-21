var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((elem) => {
  return Number(elem);
});


for (var i = 1; i < input.length; i++) {
  console.log(input[i]);
  
}