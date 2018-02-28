function hopscotch(board, size) {
  var array = [];
  var arr = [];
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < 4; j++) {
      array.push(Math.max(...board[i]));
      console.log(array);
    }
  }
  
  // for (var i = 0; i < size; i++) {
  //   if (arr[i] === arr[i + 1]) {
  //     board[i + 1][arr[i + 1]] = 0;
  //   }
  // }
  // console.log(arr);
  // console.log(board);

  var count = 0;
  
  board.forEach(elem => {
    count += Math.max(...elem);
  })
  return count
};


//아래는 테스트로 출력해 보기 위한 코드입니다.
var board = [
  [1, 5, 4, 3],
  [9, 8, 6, 10],
  [3, 7, 9, 7],
  [7, 2, 6, 4],
  [6, 3, 10, 5],
  [5, 6, 0, 6],
  [7, 3, 4, 10],
  [1, 1, 2, 0],
  [6, 3, 9, 4],
  [2, 4, 0, 2]
];

console.log(hopscotch(board, 10));