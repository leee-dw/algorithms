function solution(A, B, K) {
  return A !== B ? Math.round((B - A - 1) / K) : A % K === 0 ? 1 : 0
}
console.log(solution(11, 13, 2));