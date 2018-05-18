function solution(A) {
  A.sort((a, b) => a - b);
  return Number(A.every((elem, idx) => elem === idx + 1));
}

console.log(solution([4, 1, 3]));