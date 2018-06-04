function solution(A) {
  A.sort((a, b) => b - a);
  let abs = A.map(elem => Math.abs(elem));
  abs.sort((a, b) => b - a)
  abs.filter(elem => elem === Math.max(...abs));
}
console.log(solution([-3, 1, 2, -2, 5, 6]));