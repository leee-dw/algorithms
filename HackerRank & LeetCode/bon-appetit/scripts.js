var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var nums = Number(input[0].split(' ')[0]);
var avoid = Number(input[0].split(' ')[1]);
var res = Number(input[2]);
var dishes = input[1].split(' ').map(elem => {
  return Number(elem);
})
var sum = 0;

dishes.forEach(elem => {
  sum += elem;
});



var wrongCheck = sum / 2;
var rightCheck = (sum - dishes[avoid]) / 2;
rightCheck === res ? console.log('Bon Appetit') : console.log(wrongCheck - rightCheck);