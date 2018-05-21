function solution(A, B, K) {
  return A !== B ? Math.ceil((B - A + 1) / K) : A % K === 0 ? 1 : 0
}

