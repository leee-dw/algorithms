function sumTwoSmallestNumbers(numbers) {
  var arr = numbers.sort((a, b) => {
    return a - b
  })
  console.log(arr[0] + arr[1]);
};