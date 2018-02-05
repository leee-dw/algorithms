var input = require('fs').readFileSync('/dev/stdin').toString().replace(/ /gi, "").toLowerCase().split('').sort();

var ans = input.filter(function(item, i, a){
  return i === input.indexOf(item);
}).join('');

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

if (ans === alphabet) {
  console.log('pangram');
} else {
  console.log('not pangram')
}