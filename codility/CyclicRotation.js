function solution(A, K) {
  for (var i = 1; i <= K; i++) {
    A.unshift(A.pop());
  }
  return A;
}