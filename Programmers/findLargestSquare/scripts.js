function findLargestSquare(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if(board[i][j] ==='O') {
        console.log(i, j);
      }
    }
  }
}


//아래 코드는 테스트를 위한 출력 코드 입니다.
var testBoard = [
  ['X', 'O', 'O', 'O', 'X', 'X', 'O'],
  ['X', 'O', 'O', 'O', 'O', 'X', 'X'],
  ['X', 'X', 'O', 'O', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O', 'O', 'O'],
  ['X', 'X', 'X', 'X', 'X', 'O', 'O']
];
console.log(findLargestSquare(testBoard));