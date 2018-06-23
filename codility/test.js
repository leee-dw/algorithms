function solution(A) {
  let majority = A.sort((a, b) => a - b)[Math.floor(A.length / 2)];
  let res;
  A.forEach((elem, idx) => {
    if (elem === majority) {
      res = idx;
    }
  })
  return res
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));