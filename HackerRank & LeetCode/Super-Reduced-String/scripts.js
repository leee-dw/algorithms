var input = require('fs').readFileSync('/dev/stdin').toString();
var arr = [];


function repeat() {
  for (var i = 97; i < 123; i++) {
    if (input.indexOf(String.fromCharCode(i) + String.fromCharCode(i)) !== -1) {
      arr.push(String.fromCharCode(i) + String.fromCharCode(i))
    };
  }

  var ans = input;

  for (var i = 0; i < arr.length; i++) {
    ans = ans.replace(arr[i], '');
  }
  return ans;
}


