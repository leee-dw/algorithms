function solution(A) {
  let res = [];
  let init = A[0]
  let rest = A.slice(1).reduce((a, b) => a + b);
  res.push(Math.abs(init - rest));

  for (var i = 1; i < A.length - 1; i++) {
    init += A[i];
    rest -= A[i];
    res.push(Math.abs(init - rest));
  }
  return Math.min(...res)
}


console.log(solution([3, 1, 2, 4, 3]));