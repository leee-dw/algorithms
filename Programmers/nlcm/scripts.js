function nlcm(num) {
  var bigger = num.sort((a, b) => {
    return a - b;
  })[num.length - 1];

  while (true) {
    if (bigger % num[0] === 0 &&
      bigger % num[1] === 0 &&
      bigger % num[2] === 0 &&
      bigger % num[3] === 0 &&
      bigger % num[4] === 0 &&
      bigger % num[5] === 0 &&
      bigger % num[6] === 0 &&
      bigger % num[7] === 0 &&
      bigger % num[8] === 0 &&
      bigger % num[9] === 0) {
      return bigger
    }
    bigger++;
  }
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([73, 58, 42, 91, 22, 36, 98, 35, 18, 77]));