var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var nums = input[1].split(' ').map(elem => {
  return Number(elem);
})


var arr = [];

for (var i = 0 ; i < nums.length; i++) {
  for (var j = 0; j < nums.length; j++) {
    if (Math.abs(nums[i] - nums[j]) <= 1) {
      arr.push(nums[i])
    } 
  }
}


console.log(arr);
