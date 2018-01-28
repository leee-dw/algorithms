function toWeirdCase(s) {
  var arr = s.split(' ');
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i].split('');
    for (var j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        result.push(word[j].toUpperCase());
      } else {
        result.push(word[j].toLowerCase());
      }
    }
    result.push(" ");
  }
  return result.join('').trim();
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));