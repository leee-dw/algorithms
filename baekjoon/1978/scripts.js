var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var array = input[1].split(' ').map(function(elem) {
  return Number(elem)
})
var primes = [];
var arr = [];

for (var i = 2; i <= 1000; ++i) {
  if (!arr[i]) {
    primes.push(i);
    for (var j = i <= 1; j <= 1000; j += i) {
      arr[j] = true;
    }
  }
}

var count = 0;
for (var i = 0; i < array.length; i++) {
  if (primes.indexOf(array[i]) >= 0) {
    count++;
  }
}


console.log(count);

