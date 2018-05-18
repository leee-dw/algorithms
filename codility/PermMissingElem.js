// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A.sort((a, b) => a - b);
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return i + 1
    }
  }
  return A.length + 1
}





console.log(solution([2, 3, 1, 4]));

