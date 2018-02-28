  const condition = (n) => {
    return n.toString(2).split('').filter((elem) => Number(elem) === 1).length;
  }

  const nextBigNumber = (n) => {
    var next = n;
    while (next++) {
      if (next > n && condition(next) === condition(n)) {
        return next;
      }
    }
  }

  //아래 코드는 테스트를 위한 코드입니다.
  console.log(nextBigNumber(78));