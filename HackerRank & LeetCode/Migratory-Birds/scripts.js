var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[1].split(' ').map(function (elem) {
  return Number(elem);
});
var res = {};
var ans = [];



arr.sort();

for (var val in arr) {
  var idx = arr[val];
  res[idx] = res[idx] === undefined ? 1 : res[idx] += 1;
}

console.log(res);
for (var val in res) {
  ans.push(res[val]);
  ans.sort(function (a, b) {
    return a - b;
  })
};

for (var val in res) {
if (ans[ans.length - 1] === res[val]) {
console.log(val);
};
}