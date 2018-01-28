var input = require('fs').readFileSync('/dev/stdin').toString();

for (var i = 0; i< input.length; i+=10) {
  console.log(input.slice(i, i + 10)); 
}