function SymmetricMatrix(strArr) { 
  var matrix = [];
  var row = [];
  var i,j,x,y = 1;
  
  for(i = 0; i < strArr.length; i++){
    var val = strArr[i];
  
    if(val == '<>'){
      matrix.push(row);
      row = [];
      y++;
      if(!x){ x = i }
    } else {
      row.push(Number.parseInt(val));
    }
  }
  matrix.push(row);
  
  if(x != y){
    return "not possible";
  } else {
    for(i = 0; i < x; i++){
      for(j = 0; j <= i; j++){
        if(matrix[j][i] != matrix[i][j]){
          return "not symmetric";
        }
      }
    }
    return "symmetric";
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SymmetricMatrix(readline());







































function SymmetricMatrix(strArr) { 
    
  var matrix = strArr.join(' ').split(' <> ').map(function(x) {return x.split(' ')});    
  if (matrix.length !== matrix[0].length){
      return "not possible";
  }
  
  
  for (var i = 0; i < matrix.length; i++){
      row = matrix[i];
      for (var j = 0; j < matrix.length; j++){
          if (row[j] !== matrix[j][i]){
              return "not symmetric";
          }
      }
  }
  
  // code goes here  
  return "symmetric";
         
}
   
// keep this function call here 
SymmetricMatrix(readline());



































function toMatrix(strArr) {
  var strArr = strArr.join(" ").split("<>");
  var matrix = strArr.map(function(str){
    return str.match(/[d-]+/g).map(function(str){return parseInt(str)});
  });
  return matrix;
}

function SymmetricMatrix(strArr) {

  var matrix = toMatrix(strArr);

  if (matrix.length != matrix[0].length) return "not possible";

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix.length; x++) {
      if (matrix[x][y] != matrix[y][x]) return "not symmetric";
    };
  };

  // code goes here  
  return "symmetric"; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SymmetricMatrix(readline());