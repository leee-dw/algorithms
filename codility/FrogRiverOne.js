function solution(X, A) {
  const marks = new Set();
  return A.reduce((acc, crr, idx) => {
    crr <= X && marks.add(crr);
    return marks.size === X ? A.splice(1) && idx : acc;
  }, -1);
}

