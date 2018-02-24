var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var time = [];

var available = [];
for (var i = 1; i < input.length; i += 2) {
  available.push(input[i].split(' ')[1]);
}

for (var i = 2; i < input.length; i += 2) {
  time.push(input[i].split(' '));
}

var late = [];
for (var i = 0; i < time.length; i++) {
  var count = 0;
  for (var j = 0; j < time[i].length; j++) {
    if (Number(time[i][j]) <= 0) {
      count++
    }
  }
  late.push(count)
}


for (var i = 0; i < available.length; i++) {
  if (Number(available[i]) > late[i]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}