function solution(A) {
  for (var i = 0; i < A.length - 1; i++) {
    console.log((A[i] + A[i + 1]) / 2);
  }
}


console.log(solution([4, 2, 2, 5, 1, 5, 8]));