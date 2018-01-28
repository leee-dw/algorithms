var input = require('fs').readFileSync('/dev/stdin').toString();
var sentence = input.split('').length;
var length = input.split(' ').length;
console.log(sentence);
console.log(length);


function answer() {
  if (sentence <= 1000000) {
    return length;
  } else {
    return false;
  }
}

console.log(answer());