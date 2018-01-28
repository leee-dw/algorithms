var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var length = Number(input);
var stair = "";

for (var i = 0; i < length; i++) {
  stair = "";

  for (var j = length - 1; j > i; j--) {
    stair += " ";
  }
  for (var j = 0; j <= i; j++) {
    stair += "#";
  }
  console.log(stair);
}