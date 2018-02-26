var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var str = input[1].split('')
var arr = [];
var ans = [];
var answer = [];

var param = 0;

if (Number(input[2] > 26)) {
  param = Number(input[2] % 26);
} else {
  param = Number(input[2]);
}


for (var i = 0; i < str.length; i++) {
  if (str[i].charCodeAt(0) < 65 || (str[i].charCodeAt(0) > 90 && str[i].charCodeAt(0) < 97)) {
    arr.push(str[i].charCodeAt(0));
  } else {
    arr.push(str[i].charCodeAt(0) + param)
  }
}


for (var i = 0; i < arr.length; i++) {
  if (!(str[i].charCodeAt(0) > 90 && str[i].charCodeAt(0) < 97)) {
    if (arr[i] > 122 || (arr[i] > 90 && arr[i] < 97)) {
      arr[i] -= 26;
    }
  }

  ans.push(arr[i]);
}




for (var i = 0; i < ans.length; i++) {
  answer.push(String.fromCharCode(ans[i]));
}

console.log(answer.join(''));
console.log("WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr.");

