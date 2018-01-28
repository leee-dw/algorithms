function factorial(num) {
  var lastNumber = 1;
  if (num == lastNumber) {
    return lastNumber;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(3));