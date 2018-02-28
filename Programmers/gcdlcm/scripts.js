function gcdlcm(a, b) {
  var answer = [];
  for (var i = 0; i <= a; i++) {
    if (b % i === 0 && a % i === 0) {
      answer.push(i)
    }
  }

  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3, 12));