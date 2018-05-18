function solution(A) {
  A.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      count++;
    }
  }
  return count === 0 ? 0 : 1;
}


console.log(solution([10, 2, 5, 1, 8, 20]));








// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(A) {
//   A.sort((a, b) => a - b);
//   return A.some((val, idx) => {
//     return (A[idx] + A[idx + 1] > val) &&
//       A[idx] + val > A[idx + 1] &&
//       A[idx + 1] + val > A[idx] ? true : false;
//   }) ? 1 : 0
// }


// console.log(solution([10, 2, 5, 1, 8, 20]));