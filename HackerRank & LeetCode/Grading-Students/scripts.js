var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(function (elem) {
  return Number(elem);
})


for (var i = 1; i < input.length; i++) {
  if (input[i] >= 38) {
    if (input[i] % 5 >= 3) {
      if ((input[i] + 1) % 5 === 0) {
        console.log(input[i] + 1);
      } else {
        console.log(input[i] + 2);
      }
    } else {
      console.log(input[i]);
    }
  } else {
    console.log(input[i]);
  }
}