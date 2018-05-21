function solution(A) {
  let count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 1; j < A.length; j++) {
      if (i < j && A[i] < A[j]) {
        count++;
      }
    }
  }
  return count
}

