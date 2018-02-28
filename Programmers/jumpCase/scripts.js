const jumpCase = num => {
  return num === 0 || num === 1 ? 1 : jumpCase(num - 1) + jumpCase(num - 2);
}

console.log(jumpCase(4));