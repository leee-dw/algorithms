function solution(A) {
  var res = {};

  for (var idx of A) {
    res[idx] = res[idx] == undefined ? 1 : res[idx] += 1;
  }

  for (var value in res) {
    if (res[value] & 1) {
      return Number(value);
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));