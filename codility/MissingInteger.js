// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  var res = Array.from(new Set(A)).sort((a, b) => a - b);
  if (res[res.length - 1] > 0) {
    for (var i = 0; i < res.length; i++) {
      if (res[i] !== i + 1) {
        return i + 1
      }
    }
    return res[res.length - 1] + 1
  } else {
    return 1;
  }
}
