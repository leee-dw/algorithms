function solution(A) {
  var arr = [];
  for (var i = 0; i < A.length; i++) {
    arr.push(Math.abs(A[i]));
  }
  return sortArr(arr)
}

// console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-3, 1, 2, -2, -5, 6, 4, -7]));


function sortArr(input) {
  return input.sort((a, b) => a - b);
}