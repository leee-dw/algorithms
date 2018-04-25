function solution(A, B, K) {
  return A === B ? (A % K ? 0 : 1) : (Math.floor(B / K) - (A ? Math.floor((A - 1) / K) : -1));
}


console.log(solution(24, 29, 3));