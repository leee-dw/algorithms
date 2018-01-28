var input = require('fs').readFileSync('/dev/stdin').toString();
var star = "";

for (var i = 0; i < input; i++) {
  star += "*"
  console.log(star); 
}
