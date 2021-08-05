var BitmapHoles = function(arr){
  let bitmap = arr.map(row => row.split(''));
  let count = 0

  for(let row = 0; row < arr.length; row++){
    for(let col = 0; col < arr[0].length; col++){
      if(bitmap[row][col] === '0'){
        count++
        markAdjacentHoles(bitmap, row, col);
      }
    }
  }
  return count;

  function markAdjacentHoles(bitmap, row, col){
    //check bounds
    if((row > bitmap.length-1) || row < 0 || (col > bitmap[0].length -1 || col < 0)){
      return;
    }
    if(bitmap[row][col] === '0'){
      bitmap[row][col] = '2'; //Visited
      //Check adjacent
      markAdjacentHoles(bitmap, row - 1, col); //North
      markAdjacentHoles(bitmap, row + 1, col); //South
      markAdjacentHoles(bitmap, row, col + 1); //East
      markAdjacentHoles(bitmap, row, col - 1); //West
      
      /*
      markAdjacentHoles(bitmap, row + 1, col + 1); // South East
      markAdjacentHoles(bitmap, row + 1, col - 1); // South West
      markAdjacentHoles(bitmap, row - 1, col - 1); // North West
      markAdjacentHoles(bitmap, row - 1, col + 1); // North East
      */

    }else{
      return
    }
  }
}

   
// keep this function call here 
BitmapHoles(readline());
































function toggleAdjacentZeroes(matrix, row, column) {
  if (row < 0 || column < 0 || row > matrix.length-1 || column > matrix[0].length-1 || matrix[row][column] != 0) {
    return;
  }
  if (matrix[row][column] == 0) {
    matrix[row][column] = 1;
  }
  toggleAdjacentZeroes(matrix, row+1, column);
  toggleAdjacentZeroes(matrix, row, column+1);
  toggleAdjacentZeroes(matrix, row-1, column);
  toggleAdjacentZeroes(matrix, row, column-1);
};

function BitmapHoles(strArr) {
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i].split("");
    }
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j < strArr[i].length; j++) {
        if (strArr[i][j] == 0) {
          count++;
          toggleAdjacentZeroes(strArr, i, j);
        }
      }
    }
    return count;
};

// keep this function call here 
BitmapHoles(readline());



































function BitmapHoles(strArr) {
  const bitmap = strArr.map(row => row.split(''));
  let count = 0;
  
  const isHole = val => val === '0';
  
  function dedupe(map, i, j) {
    if (i < 0 || j < 0 || i >= map.length || j >= map[i].length || !isHole(map[i][j])) {
      return;
    }
    
    map[i][j] = '1';
    
    dedupe(map, i - 1, j);
    dedupe(map, i + 1, j);
    dedupe(map, i, j - 1);
    dedupe(map, i, j + 1);
  }
  
  bitmap.forEach((row, i) => {
    for (let j = 0; j < row.length; j++) {
      if (isHole(row[j])) {
        count++;
        dedupe(bitmap, i, j);
      }
    }
  })
  
  return count;
}
 
// keep this function call here 
BitmapHoles(readline());







































function BitmapHoles(strArr) { 

  var index = [],
       holes = 0,
       checker;
   for (var i=0; i < strArr.length; i++){
       strArr[i] = strArr[i].split('');
       for (var j=0; j < strArr[i].length; j++){
           if (strArr[i][j] === "0"){
               index.push([i, j]);
           }
       }   
   }
   for (var c=0; c < index.length; c++){
       checker = false;
       for (var k=c+1; k < index.length; k++){
           if (index[k][0] === index[c][0]+1 && index[k][1] === index[c][1] || index[k][0] === index[c][0] && index[k][1] === index[c][1]+1){
               checker = true;
           }
       }
       if (checker === false){
           holes += 1;
       }
   }
   return holes;
        
}
  
// keep this function call here 
BitmapHoles(readline());





