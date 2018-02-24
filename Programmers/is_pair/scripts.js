function is_pair(s) {
  var left = s.match(/\(/g);
  var right = s.match(/\)/g);
  if (left === null) {
    left = 0;
  } else if (right === null) {
    right = 0;
  }

  if (left.length === right.length) {
    return true
  } else {
    return false
  }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(is_pair("try("))