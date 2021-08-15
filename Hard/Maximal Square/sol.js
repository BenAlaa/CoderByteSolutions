function MaximalSquare(strArr) { 
  var large = 0;
  for(var i = 0; i < strArr.length; i++){
      for(var j = 0; j < strArr[0].length; j++){
          if(largest(allSubs(strArr, i, j)) > large){
              large = largest(allSubs(strArr, i, j))
          }
      }
  }
  return large
       
}

function allSubs(matrix, x, y){
  var retArr = []
  var temp = []
  for(var size = 1; size < matrix[0].length - x + 1; size++){
      temp= []
      if(size <= matrix.length - y){
          for(var i = y; i < y + size; i++){
              temp.push(matrix[i].substring(x, x + size));
          }
      }
      if(temp.length != 0){retArr.push(temp)}
  }
  return retArr
}
var mat = ["0111", "1101", "0111"]

function printAll(arr){
  for(var i = 0; i < arr.length; i++){
      console.log(arr[i]);
  }
}

function largest(list){
  var large = 0;
  for(var i = 0; i < list.length ; i++){
      if(checkSquare(list[i])){
          large = list[i].length * list[i].length
      }
  }
  return large
}

function checkSquare(matrix){
  for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0]; j++){
          if(matrix[i][j] == '0') return false;
      }
  }
  return true;
}












































function MaximalSquare(strArr) { 
  const matrix = strArr.map(it => it.split(""))
  const board = Array.from({ length : matrix.length }).map(() => [])
  for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
          if(i === 0 || j === 0) {
              board[i][j] = matrix[i][j]
          } else {
              if(matrix[i][j] == 1) {
                  board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1
              } else {
                  board[i][j] = 0
              }
              
          }
      }
  }
// code goes here  
return Math.pow(Math.max(...board.reduce((r, row) => r.concat(row), [])), 2); 
}
 
// keep this function call here 
MaximalSquare(readline());









































function MaximalSquare(strArr) {
  let fullArray = strArr.map(val => val.split(''));

  let initArray = initialEval(fullArray);

  if (initArray.length === 0) {
    return 0;
  }
  count = 1;

  while (initArray.length) {
    initArray = initArray.filter(val => {
      return testOne(fullArray, count + 1, val[0], val[1]);
    })
    count++;
    if (count > 10) break;
  }
  return Math.pow(count - 1, 2);
}

function initialEval (arr) {
  let initArray = [];
  arr.forEach((row, rowNum) => {
    row.forEach((val, colNum) => {
      if (val === '1') {
        initArray.push([rowNum, colNum]);
      }
    });
  });
  return initArray;
}

function testOne(arr, size, r, c) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
        return false;
      }
    }
  }
  return true;
}
   
// keep this function call here 
MaximalSquare(readline());