function solution(S) {
  let count = 0;
  let minus;
  S.split('').forEach(elem => {
    elem === '(' ? count++ : count--;
    if (count < 0) minus = true
  })
  if (minus) return 0
  return !count ? 1 : 0
}

