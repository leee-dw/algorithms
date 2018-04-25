function solution(A) {
  var arr = A.sort(function (a, b) {
    return a - b;
  })

  for (var elem in arr) {
    if (arr[elem] !== Number(elem) + 1) {
      return Number(elem) + 1;
    }
  }
  return arr.length + 1
}
console.log(solution([2, 3, 1, 4, 5, 6]));