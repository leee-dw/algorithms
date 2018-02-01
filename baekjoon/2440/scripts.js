var input = require('fs').readFileSync('/dev/stdin').toString();
var res = "";
for (var i = input; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    res += "*"
  }
  res += '\n';
}
console.log(res);