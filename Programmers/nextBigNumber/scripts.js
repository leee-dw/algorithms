function nextBigNumber(origin, nxt) {
  var next = nxt || origin + 1;
  var originBinary = origin.toString(2);
  var originBinaryCount = (originBinary.match(/1/g) || []).length;
  var nextBinary = next.toString(2);
  var nextBinaryCount = (nextBinary.match(/1/g) || []).length;
  // console.log('#', origin, next, originBinaryCount, nextBinaryCount);

  if (originBinaryCount === nextBinaryCount) {
    return next;
  } else {
    return nextBigNumber(origin, next + 1);
  }
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(nextBigNumber(78));