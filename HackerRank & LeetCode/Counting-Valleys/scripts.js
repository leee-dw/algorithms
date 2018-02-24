var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var up = input[1].match(/U/gi);
var down = input[1].match(/D/gi);
var level = 0;
var ans = 0;




