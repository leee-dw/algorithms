function numberOfPrime(n) {
  var arr = [];
  var primes = [];

  for (var i = 2; i <= n; ++i) {
    if (!arr[i]) {
      primes.push(i);
      for (var j = i <= 1; j <= n; j += i) {
        arr[j] = true;
      }
    }
  }
  return primes;
}

console.log(numberOfPrime(10));