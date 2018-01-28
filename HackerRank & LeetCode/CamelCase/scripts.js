var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var camelCase = input[0].split('');
var div = [];
var ans =[];

for (var i = 0; i < camelCase.length; i++) {
  if (camelCase[i] === camelCase[i].toUpperCase()) {
    div.push(i)
  }
}

for (var i = 0; i< div.length; i++) {
ans.push(camelCase.slice(div[i], div[i+1]).join(''));
}

console.log(ans.length + 1);