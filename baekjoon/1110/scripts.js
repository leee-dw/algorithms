var input = require('fs').readFileSync('/dev/stdin').toString();
var arr = [];

function test(num) {
  return Number(num.toString().split('')[0]) + Number(num.toString().split('')[1]);
}


  if (test(Number(input)) === input) {
    console.log("ye");
  } else {
    console.log("no");
    test(Number(input));
  }
