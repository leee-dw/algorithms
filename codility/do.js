function solution(A) {
  var num = A[0],
    count = 0,
    res;
  A.forEach(val => {
    if (val === num) {
      count++;
    } else if (count === 0) {
      num = val;
      count = 1;
    } else {
      count--;
    }
  });
  
  A.forEach((element, idx) => {
    if (element === num) res = idx;
  });
  return res
};


console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));