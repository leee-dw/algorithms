function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*") 
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));