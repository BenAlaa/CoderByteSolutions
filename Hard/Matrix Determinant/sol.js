function readMatrix(mat) {
  return mat.join(",").split(",<>,").map(function (a) {
      return a.split(",").map(function (b) {
          return parseInt(b);
      });
  });
}

function small(mat, r, c) {
  var t = [], s;
  for (var i = 0; i < mat.length; i++) {
      if (i == r)
          continue;
      s = [];
      for (var j = 0; j < mat[0].length; j++) {
          if (j == c)
              continue;
          s.push(mat[i][j]);
      }
      t.push(s);
  }
  return t;
}

function det(mat) {
  if (mat.length == 1)
      return mat[0][0];
  var d = 0;
  for (var i = 0; i < mat.length; i++) {
      var k = (0 == (i % 2) ? 1 : -1) * mat[i][0] * det(small(mat, i, 0));
      console.log(k);
      d += k;
  }
  console.log(d);
  return d;
}

function MatrixDeterminant(strArr) {
  var mat = readMatrix(strArr);
  if (mat.length != mat[0].length)
      return -1;


  return det(mat);
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MatrixDeterminant(readline());






































function MatrixDeterminant(strArr) { 

  var matrix = strArr.join(" ");
  matrix = matrix.split(" <> ");
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].split(" ");
  }
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[i].length; j++)
      matrix[i][j] = Number(matrix[i][j]);
  
  function subMatrix(arrArg, index) {
    var newMatrix = arrArg.slice();
    for (var i = 0; i < newMatrix.length; i++) {
      newMatrix[i] = newMatrix[i].slice();
    }
    newMatrix.splice(0, 1);
    for (var i = 0; i < newMatrix.length; i++) {
      newMatrix[i].splice(index, 1);
    }
    return newMatrix;
  }
  
  
  function findDeterminant(matrixArg) {
    if (matrixArg.length == 2) {
      return matrixArg[0][0] * matrixArg[1][1] - matrixArg[1][0] * matrixArg[0][1];    
    }
    else
    {
      var multiplier = -1;
      var answer = 0;
      for (var i = 0; i < matrixArg[0].length; i++) {
        multiplier = -multiplier;
        answer += matrixArg[0][i] * multiplier * findDeterminant(subMatrix(matrixArg, i));
      }
      return answer;
    }
  }
  
  return findDeterminant(matrix);
}


// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MatrixDeterminant(readline());



































function MatrixDeterminant(strArr) {

  // code goes here
  var matrix = [[]];
  var i = 0;
  var str;
  while (str = strArr.shift()) {
    if (str == '<>') {
      matrix.push([]);
      i++;
      continue;
    }

    matrix[i].push(+str);
  }
  if (i != matrix[0].length - 1) return -1;

  return calc(matrix);
}

function calc(matrix) {
  if (matrix.length == 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  var sum = 0;
  for (var k = 0; k < matrix.length; k++) {
    var n = matrix[k][0];
    var m = [];
    for (var i = 0; i < matrix.length; i++) {
      var row = [];
      for (var j = 1; j < matrix.length; j++) {
        row.push(matrix[i][j]);
      }
      if (i != k) m.push(row);
    }

    var sign = k % 2 == 0 ? 1 : -1;
    sum += sign * n * calc(m);
  }

  return sum;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MatrixDeterminant(readline());








































function MatrixDeterminant(strArr) { 

  var matrix = [], row = [];
  for(var i = 0; i < strArr.length; i++){
   	if(strArr[i] == "<>"){
     	matrix.push(row);
        row = [];
    }
    else
      row.push(strArr[i]);
  }
  matrix.push(row);
  
  function submatrix(matrix, x) {
   	var res = [];
    for(var i = 1; i < matrix.length; i++){
     	var elt = matrix[i] , row = [];
        for(var j = 0; j < elt.length; j++){
         	 if(j == x)
               continue;
             row.push(elt[j]);
        }
        res.push(row);
    }
    return res;
  }
  
  function determinant(matrix) {
    if(matrix.length === 0 || matrix.length !== matrix[0].length)
         return -1;
    
   	
    if(matrix.length == 1)
      return matrix[0][0];
    if(matrix.length == 2)
      return  (matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]);
    
    var det = 0 ;
    for(var j = 0; j < matrix[0].length; j++)
         	det += Math.pow(-1,j) *matrix[0][j] * determinant(submatrix(matrix,j)); 
        
    
    return det;
  }
  
  return determinant(matrix);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MatrixDeterminant(readline());
