function solution(A, B, K) {
  let condition = A % K === 0 || B % K === 0 ? 1 : 0;
  return A !== B ? Math.ceil((B - A) / K) + condition : A % K === 0 ? 1 : 0


}





console.log(solution(11, 13, 2));