/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
var str = x + ""
var arr = str.split('');
var reverse = [];


for (var i = 1 ; i <= arr.length; i++) {
  reverse.push(arr[arr.length - i])
}

    if (reverse.length >= 10 && reverse[reverse.length - 1] == "-" || reverse.length >= 10) {
        return 0;
    } else if(reverse[reverse.length - 1] === "-") {
        reverse.pop();
        return Number(reverse.join(''))*-1;
    } else {
        return Number(reverse.join(''));
    }
}

