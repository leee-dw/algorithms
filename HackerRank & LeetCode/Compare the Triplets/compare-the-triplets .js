var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


var alice = input[0].split(' ');
var bob = input[1].split(' ');
var aliceAnswer = 0;
var bobAnswer = 0;


for (var i = 0; i < alice.length; i++) {
  if (Number(alice[i]) > Number(bob[i])) {
    aliceAnswer++;
  } else if (Number(alice[i]) < Number(bob[i])) {
    bobAnswer++;
  }
}

console.log(aliceAnswer, bobAnswer);