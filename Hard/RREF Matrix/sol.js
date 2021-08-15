function RREFMatrix(strArr) { 

  // code goes here  
  var input = strArr.map(function (n) { return parseInt(n); }),
      m = [];
  /*
   * parse input
   */
  (function () {
    for (var i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        m.push(input.splice(0, i));
        input.splice(0, 1);
        i = 0;
      }
    }
    m.push(input);
  })();
  /*
   * the algorithm for REF
   */
  (function () {
    for (var i = 0; i < m.length; i++) {
      // if the first element is zero, swap it.
      (function () {
        var j, row;
        if (m[i][i] === 0) 
          for (j = i + 1; j < m.length; j++)
            if (m[j][i] !== 0) {
              row = m[i];
              m[i] = m[j];
              m[j] = row;
              break;
            }
      })();

      // divide a whole row by the first element of it.
      (function () {
        var j, divisor;
        for (j = i; j < m[i].length; j++) {
          if (m[i][j] === 0) continue;
          if (!divisor) divisor = m[i][j];
          m[i][j] /= divisor;
        }
      })();

      // subtract the row from others below.
      (function () {
        var j, k, multiplier;
        for (j = i + 1; j < m.length; j++) {
          multiplier = m[j][i];
          for (k = i; k < m[i].length; k++)
            m[j][k] -= multiplier * m[i][k];
        }
      })();
    }
  })();
  /*
   * the algorithm for RREF
   */
  (function () {
    var i, j, k, col, multiplier;
    for (i = 1; i < m.length; i++) {
      for (col = i; col < m[i].length; col++)
        if (m[i][col] !== 0) break;
      for (j = i - 1; j >= 0; j--) {
        multiplier = m[j][col];
        for (k = col; k < m[j].length; k++) 
          m[j][k] -= multiplier * m[i][k];
      }
    }
  })();

  return (function () {
    var tmp = m.map(function (row) { return row.join(''); });
    return tmp.join('');
  })();

}
   
// keep this function call here 
console.log(RREFMatrix(readline()));




































































function round(a, b) { return Math.round(a * Math.pow(10, b)) / Math.pow(10, b) }

function RREFMatrix(strArr) {
    var table = [];
    var row = [];
    for (var r of strArr) {
        if (r == '<>') {
            table.push(row);
            row = [];
        } else {
            row.push(Number(r));
        }
    }
    var cols = row.length;
    table.push(row);


    var swapRows = (i, j) => {
        var t = table[i];
        table[i] = table[j];
        table[j] = t;
    }

    var multiplyRow = function (iRow, mult) {
        return table[iRow].slice(0).map(e=> e * mult);
    }

    var multiplyAndRAddRow = function (destIRow, sourceIRow, mult) {
        var row = multiplyRow(sourceIRow, mult);
        var destRow = table[destIRow];
        for (var x = 0; x < destRow.length; x++) {
            destRow[x] = round(destRow[x] + row[x], 4)
            // I[destIRow][x] = round(I[destIRow][x] + rows[1][x], 4)
        }
    }
    var nextValidRow = 0;
    for (var c = 0; c < cols; c++) {
        for (var r = nextValidRow; r < table.length; r++) {
            if (table[r][c] == 0)
                continue;
            if (r > nextValidRow)
                swapRows(r, nextValidRow);
            r = nextValidRow;
            for (var r2 = 0; r2 < table.length; r2++)
                if (r2 !== r)
                    multiplyAndRAddRow(r2, r, -table[r2][c] / table[r][c]);
            table[r] = multiplyRow(r, 1 / table[r][c]);
            nextValidRow = r + 1;
            break;
        }
    }


 

  
    /*
        for (var y = table.length - 1; y > 0; y--) {
    
            for (var y2 = y - 1; y2 >= 0; y2--) {
                multiplyAndRAddRow(y2, y, (0 - table[y2][y]));
            }
        }
    */
    var res = "";
    for (var y = 0; y < table.length; y++) {
        var row = table[y];
        for (var x = 0; x < row.length; x++) {
            res += row[x] ;
        }
    }
    return res;
}
   
// keep this function call here 
RREFMatrix(readline());
























































function RREFMatrix(strArr) {
  var n=strArr.indexOf('<>');
  if(n===-1){
      n=strArr.length
  }
  console.log(n)
  var a=strArr.splice(0,n);
  var arr=[];
  arr.push(a);
  while(strArr.indexOf('<>')>=0){
      console.log(strArr);
      strArr.splice(0,1);
      a=strArr.splice(0,n);
      arr.push(a)
  }
  
  for (var i=0; i<arr.length; i++){
      var b=0;
      var c=0;
      for (var k=0; k<n; k++){
          if(Number(arr[i][k])!==0 && b===0){
              b=Number(arr[i][k]);
              c=k;
          }
          if (b!==0){
              arr[i][k] = arr[i][k]/b
          }
          
      }
      console.log(arr)
      
      for(var j=0; j<arr.length; j++){
          if (j!==i){
              var d=Number(arr[j][c])
              for (var l=0; l<n; l++){
                  arr[j][l]=Number(arr[j][l])-arr[i][l]*d
              }
              console.log(arr)
          }
      }

  }
  for (var m=0; m<arr.length; m++){
      arr[m]=arr[m].join('')
  }
  

return arr.sort().reverse().join(''); 
       
}
// keep this function call here 
RREFMatrix(readline());
