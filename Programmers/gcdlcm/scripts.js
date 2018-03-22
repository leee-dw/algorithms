function gcdlcm(a, b) {
  var answer = [];
  for (var i = 0; i <= a; i++) {
    for (var j = 0; j <= b; j++) {
      if (b % j === 0 && a % i === 0) {
        if (i === j) {
          answer.push(i)
        }
      }
    }
  }

  return answer[answer.length - 1];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(12, 18));