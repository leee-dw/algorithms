var input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

var preset = input[0].split(' ').map(elem => {
  return Number(elem);
})

var numsofHurdles = preset[0]
var abilities = preset[1]

var arr = input[1].split(' ').map(elem => {
  return Number(elem);
});

var ans = [];

for (var i = 0; i < numsofHurdles; i++) {
  if (abilities < arr[i]) {
    ans.push(arr[i] - abilities);
  }
}

ans.sort(function (a, b) {
  return a - b;
})

if (ans[ans.length - 1]) {
  console.log(ans[ans.length - 1]);
} else {
  console.log(0);
}