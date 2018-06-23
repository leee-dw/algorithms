let hammingDistance = function (x, y) {
  let count = 0;
  let arrX = x.toString(2).split('');
  let arrY = y.toString(2).split('');

  for (let i = 0; i < arrX.length; i++) {
    if (arrX.length < 1024) {
      arrX.unshift('0')
    }
  }

  for (let i = 0; i < arrY.length; i++) {
    if (arrY.length < 1024) {
      arrY.unshift('0')
    }
  }

  for (let i = 0; i < 1024; i++) {
    if (arrX[i] !== arrY[i]) {
      count++
    }
  }
  return count
};