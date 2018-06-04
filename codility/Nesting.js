// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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


console.log(solution('(()(())())'));
console.log(solution('(()'));
console.log(solution(')('));