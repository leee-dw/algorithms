function solution(A) {
  let arr = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      A = A.splice(i, A.length - i);
      arr = arr.concat(A);
    }
  }
  return arr.reduce((acc, crr) => acc + crr)
}




console.log(solution([0, 1, 0, 1, 1]));