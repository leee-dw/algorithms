var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// console.log(input);
function checkPuzzle(testcase) {
  // testcase = testcase.split('\n');
  testcase[2] = testcase[2].split(' ');

  var _copy_case = testcase[2].slice();

  var isReverse = (parseInt(testcase[2][0], 10) > parseInt(testcase[2][1])) && (testcase[2][0] !== testcase[0]) ? true : false;
  var firstIdx = parseInt(testcase[2][0]);
  var checkValue = testcase[1];
  var max = parseInt(testcase[0], 10);

  if (isReverse) {
    _copy_case = _copy_case.reverse();
  }
  for (var i = 0; i < firstIdx; i++) {
    var _copy_case_item;

    _copy_case_item = _copy_case.shift();
    _copy_case.push(_copy_case_item);
    if (checkValue === _copy_case.join(' ')) {
      return 'good puzzle';
    }

  }

  return 'bad puzzle';
}

console.log(checkPuzzle(input));
// console.log(checkPuzzle('5\n1 2 3 4 5\n4 3 2 1 5'));
// console.log(checkPuzzle('5\n1 2 3 4 5\n4 2 3 1 5'));
// console.log(checkPuzzle('5\n1 2 3 4 5\n5 1 2 3 4'));
// console.log(checkPuzzle('5\n1 2 3 4 5\n4 5 1 2 3'));
// console.log(checkPuzzle('5\n1 2 3 4 5\n3 4 5 1 2'));
// console.log(checkPuzzle('5\n1 2 3 4 5\n2 3 4 5 1'));
// console.log(checkPuzzle('6\n1 2 3 4 5 6\n2 3 4 6 5 1'));