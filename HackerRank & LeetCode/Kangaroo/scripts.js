var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(function (elem) {
  return Number(elem)
})

var ans = '';

for (var i = 0; i < 10000; i++) {
  if ((input[0]) + (input[1] * i) === input[2] + ((input[3] * i))) {
    ans = i
  }
}

if (ans !== '') {
  console.log("YES");
} else {
  console.log("NO"); 
}
