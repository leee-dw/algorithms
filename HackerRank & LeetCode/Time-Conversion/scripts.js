var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var arr = input[0].split(":");
var meridiem = arr[2].substring(2, 4);
var hour = Number(arr[0]);
var min = arr[1];
var sec = arr[2].split('').splice(0, 2).join('');


if (meridiem ==="PM" && hour === 12) {
  console.log(hour + ":" + min + ":" + sec);
} else if (meridiem ==="PM") {
  console.log(hour+ 12 + ":" + min + ":" + sec);
} else if (meridiem ==="AM" && hour === 12) {
  console.log("00" + ":" + min + ":" + sec);
} else if(hour < 10) {
  console.log("0" + hour + ":" + min + ":" + sec);
} else {
  console.log(hour + ":" + min + ":" + sec);
}