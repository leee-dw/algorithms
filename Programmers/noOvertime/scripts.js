function noOvertime(no, works) {
  var sum = 0;

  for (var i = 0; i < no; i++) {
    works.sort(function (a, b) {
      return a - b;
    });
    works[works.length - 1] -= 1;
  }
  works.forEach(element => {
    sum += Math.pow(element, 2);
  });
  return sum
}

console.log(noOvertime(38, [9, 10, 10, 7, 6, 10, 7]));