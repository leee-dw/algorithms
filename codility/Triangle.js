function solution(A) {
  A.sort((a, b) => a - b);
  return A.some((v, i) => v + A[i + 1] > A[i + 2]) ? 1 : 0;
}


