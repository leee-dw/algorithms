var hammingDistance = function (x, y) {
  let xb = x.toString(2).split('');
  let yb = y.toString(2).split('');
  if (xb.length > yb.length) {
    yb = [...Array(xb.length - yb.length)].fill('0').concat(yb);
  } else {
    xb = [...Array(yb.length - xb.length)].fill('0').concat(xb);
  }
  console.log(xb, yb);
  const diff = xb.reduce((ac, cv, idx) => {
    if (cv !== yb[idx]) ac++;
    return ac;
  }, 0)
  return diff;

};

hammingDistance(1, 4)