function invertTree(root) {
  let res = [];
  root.forEach((elem, idx) => {
    let arr = root.slice((Math.pow(2, idx) - 1), Math.pow(2, idx + 1) - 1).reverse();
    res = res.concat(arr);
  })
  return res;
};


console.log(invertTree([4, 2, 7, 1, 3, 6, 9, 1, 3, 7, 8, 6, 6, 1, 5]));