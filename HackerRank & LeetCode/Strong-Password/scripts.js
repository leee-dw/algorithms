var input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

var arr = s.split('');
var res = [];
var ans = [];
var answer = [];

for (var i = 0; i < arr.length; i++) {
  res.push(arr[i].charCodeAt(0));
  if (n > 26) {
    var N = n - 26;
  }
  if (res[i] + N > 90 && res[i] <= 90) {
    ans.push(res[i] - 26 + N);
  } else if (res[i] + N > 122 && res[i] <= 122) {
    ans.push(res[i] - 26 + N);
  } else {
    ans.push(res[i] + N);
  }
}
for (var i = 0; i < ans.length; i++) {
  if (ans[i] <= 64) {
    ans[i] = 32;
  }
  answer.push(String.fromCharCode(ans[i]));
}
console.log answer.join('').replace(/2/g, " ");