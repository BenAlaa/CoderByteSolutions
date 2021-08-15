function ConnectFourWinner(strArr) {
  //get the color from the input and pin it to the global scope
  this.color = strArr.shift();
  this.regEx = new RegExp (this.color.repeat(4),'i');
  //convert the gameboard to an array of arrays, just to be easier to work with
  var prettyArr = prettify(strArr);

  //create an array of the array after the next move
  for (var i = 0; i < 7; i++) {
      var testArr = createTestArr(prettyArr, i);
      if (!testArr) continue;
      if (isRow(testArr[0]) || isCol(testArr[0]) || isDiag(testArr[0])) {
          return '(' +  (testArr[1] + 1) + 'x' + (i + 1) + ')';
      }

  }
  //get an array of all the places where color currently exists
  this.placeArr = placement(prettyArr);

  return 'none';
};


//------------------------------helpers-------------------------------
function prettify(arr) {
  resArr = arr.map(function(val) {
      return val.replace(/[()]/g, '').split(',');
  })
  return resArr;
}

function placement(arr) {
  var resArr = [];
  arr.forEach(function(row, rowInd) {
      row.forEach(function(col, colInd) {
          if (col === this.color) {
              resArr.push([rowInd, colInd]);
          }
      });
  });
  return resArr;
}

function createTestArr(arr, col) {
  var copy;
  var arrCopy = arrayCopier(arr);
  for (var row = 0; row < 6; row++) {
      if (arrCopy[row][col] !== 'x' && row !== 0) {
          arrCopy[row - 1][col] = this.color;
          return [arrCopy, row - 1];
      }
      if (row === 5 && arrCopy[row][col] === 'x') {
          arrCopy[row][col] = this.color;
          return [arrCopy, row]
      }
  }
  return null;
}

function isRow (arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      var valStr = arr[i].join('');
      if (this.regEx.test(valStr)) return true;
  }
  return false;
}

function isCol (arr) {
  var rowNum = arr.length;
  var colNum = arr[0].length;
  var flipArr = [];
  for (var col = 0; col < colNum; col++) {
      flipArrRow = [];
      for (var row = 0; row < rowNum; row++) {
          flipArrRow.push(arr[row][col])
      }
      flipArr.push(flipArrRow);
  }
  var flipLen = flipArr.length;
  for (var i = 0; i < flipLen; i++) {
      var valStr = flipArr[i].join('');
      if (this.regEx.test(valStr)) return true;
  }
  return false;
}

function isDiag(arr) {
  var places = placement(arr);
  var placesLen = places.length;

  for(var i = 0; i < placesLen; i++)  {
      var vert = places[i][0] <= 2 ? 'd' : 'u';
      var hor = places[i][1] <= 2 ? 'r' : (places[i][1] >= 4 ? 'l' : 'b');
      var type = vert + hor;
      var counter = 0;
      switch (type) {
          case 'dr':
              if (arr[places[i][0]+1][places[i][1]+1] === this.color &&
                  arr[places[i][0]+2][places[i][1]+2] === this.color &&
                  arr[places[i][0]+3][places[i][1]+3] === this.color) {
                  return true;
              }
              break;
          case 'dl':
              if (arr[places[i][0]+1][places[i][1]-1] === this.color &&
                  arr[places[i][0]+2][places[i][1]-2] === this.color &&
                  arr[places[i][0]+3][places[i][1]-3] === this.color)
              return true;
              break;
          case 'ur':
              if (arr[places[i][0]-1][places[i][1]+1] === this.color &&
                  arr[places[i][0]-2][places[i][1]+2] === this.color &&
                  arr[places[i][0]-3][places[i][1]+3] === this.color)
              return true;
              break;
          case 'ul':
              if (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                  arr[places[i][0]-2][places[i][1]-2] === this.color &&
                  arr[places[i][0]-3][places[i][1]-3] === this.color)
              return true;
              break;
          case 'db':
              if ((arr[places[i][0]+1][places[i][1]+1] === this.color &&
                  arr[places[i][0]+2][places[i][1]+2] === this.color &&
                  arr[places[i][0]+3][places[i][1]+3] === this.color) ||
                  (arr[places[i][0]+1][places[i][1]-1] === this.color &&
                  arr[places[i][0]+2][places[i][1]-2] === this.color &&
                  arr[places[i][0]+3][places[i][1]-3]))
              return true;
              break;
          case 'ub':
              if ((arr[places[i][0]-1][places[i][1]+1] === this.color &&
                  arr[places[i][0]-2][places[i][1]+2] === this.color &&
                  arr[places[i][0]-3][places[i][1]+3] === this.color) ||
                  (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                  arr[places[i][0]-2][places[i][1]-2] === this.color &&
                  arr[places[i][0]-3][places[i][1]-3] === this.color))
              return true;
              break;
      }
  }
  return false;
}


function arrayCopier(arr) {
  var outArr = [];
  arr.forEach(function(val, ind) {
      outArr[ind] = Array.isArray(val) ? arrayCopier(val) : val;

  })
  return outArr;
}
 
// keep this function call here 
ConnectFourWinner(readline());









































function ConnectFourWinner(strArr) {
  //get the color from the input and pin it to the global scope
  this.color = strArr.shift();
  this.regEx = new RegExp (this.color.repeat(4),'i');
  //convert the gameboard to an array of arrays, just to be easier to work with
  var prettyArr = prettify(strArr);

  //create an array of the array after the next move
  for (var i = 0; i < 7; i++) {
      var testArr = createTestArr(prettyArr, i);
      if (!testArr) continue;
      if (isRow(testArr[0]) || isCol(testArr[0]) || isDiag(testArr[0])) {
          return '(' +  (testArr[1] + 1) + 'x' + (i + 1) + ')';
      }

  }
  //get an array of all the places where color currently exists
  this.placeArr = placement(prettyArr);

  return 'none';
};


//------------------------------helpers-------------------------------
function prettify(arr) {
  resArr = arr.map(function(val) {
      return val.replace(/[()]/g, '').split(',');
  })
  return resArr;
}

function placement(arr) {
  var resArr = [];
  arr.forEach(function(row, rowInd) {
      row.forEach(function(col, colInd) {
          if (col === this.color) {
              resArr.push([rowInd, colInd]);
          }
      });
  });
  return resArr;
}

function createTestArr(arr, col) {
  var copy;
  var arrCopy = arrayCopier(arr);
  for (var row = 0; row < 6; row++) {
      if (arrCopy[row][col] !== 'x' && row !== 0) {
          arrCopy[row - 1][col] = this.color;
          return [arrCopy, row - 1];
      }
      if (row === 5 && arrCopy[row][col] === 'x') {
          arrCopy[row][col] = this.color;
          return [arrCopy, row]
      }
  }
  return null;
}

function isRow (arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      var valStr = arr[i].join('');
      if (this.regEx.test(valStr)) return true;
  }
  return false;
}

function isCol (arr) {
  var rowNum = arr.length;
  var colNum = arr[0].length;
  var flipArr = [];
  for (var col = 0; col < colNum; col++) {
      flipArrRow = [];
      for (var row = 0; row < rowNum; row++) {
          flipArrRow.push(arr[row][col])
      }
      flipArr.push(flipArrRow);
  }
  var flipLen = flipArr.length;
  for (var i = 0; i < flipLen; i++) {
      var valStr = flipArr[i].join('');
      if (this.regEx.test(valStr)) return true;
  }
  return false;
}

function isDiag(arr) {
  var places = placement(arr);
  var placesLen = places.length;

  for(var i = 0; i < placesLen; i++)  {
      var vert = places[i][0] <= 2 ? 'd' : 'u';
      var hor = places[i][1] <= 2 ? 'r' : (places[i][1] >= 4 ? 'l' : 'b');
      var type = vert + hor;
      var counter = 0;
      switch (type) {
          case 'dr':
              if (arr[places[i][0]+1][places[i][1]+1] === this.color &&
                  arr[places[i][0]+2][places[i][1]+2] === this.color &&
                  arr[places[i][0]+3][places[i][1]+3] === this.color) {
                  return true;
              }
              break;
          case 'dl':
              if (arr[places[i][0]+1][places[i][1]-1] === this.color &&
                  arr[places[i][0]+2][places[i][1]-2] === this.color &&
                  arr[places[i][0]+3][places[i][1]-3] === this.color)
              return true;
              break;
          case 'ur':
              if (arr[places[i][0]-1][places[i][1]+1] === this.color &&
                  arr[places[i][0]-2][places[i][1]+2] === this.color &&
                  arr[places[i][0]-3][places[i][1]+3] === this.color)
              return true;
              break;
          case 'ul':
              if (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                  arr[places[i][0]-2][places[i][1]-2] === this.color &&
                  arr[places[i][0]-3][places[i][1]-3] === this.color)
              return true;
              break;
          case 'db':
              if ((arr[places[i][0]+1][places[i][1]+1] === this.color &&
                  arr[places[i][0]+2][places[i][1]+2] === this.color &&
                  arr[places[i][0]+3][places[i][1]+3] === this.color) ||
                  (arr[places[i][0]+1][places[i][1]-1] === this.color &&
                  arr[places[i][0]+2][places[i][1]-2] === this.color &&
                  arr[places[i][0]+3][places[i][1]-3]))
              return true;
              break;
          case 'ub':
              if ((arr[places[i][0]-1][places[i][1]+1] === this.color &&
                  arr[places[i][0]-2][places[i][1]+2] === this.color &&
                  arr[places[i][0]-3][places[i][1]+3] === this.color) ||
                  (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                  arr[places[i][0]-2][places[i][1]-2] === this.color &&
                  arr[places[i][0]-3][places[i][1]-3] === this.color))
              return true;
              break;
      }
  }
  return false;
}


function arrayCopier(arr) {
  var outArr = [];
  arr.forEach(function(val, ind) {
      outArr[ind] = Array.isArray(val) ? arrayCopier(val) : val;

  })
  return outArr;
}
 
// keep this function call here 
ConnectFourWinner(readline());








































function ConnectFourWinner(strArr) {
  //get the color from the input and pin it to the global scope
  this.color = strArr.shift();
  this.regEx = new RegExp (this.color.repeat(4),'i');
  //convert the gameboard to an array of arrays, just to be easier to work with
  var prettyArr = prettify(strArr);

  //create an array of the array after the next move
  for (var i = 0; i < 7; i++) {
      var testArr = createTestArr(prettyArr, i);
      if (!testArr) continue;
      if (isRow(testArr[0]) || isCol(testArr[0]) || isDiag(testArr[0])) {
          return '(' +  (testArr[1] + 1) + 'x' + (i + 1) + ')';
      }

  }
  //get an array of all the places where color currently exists
  this.placeArr = placement(prettyArr);

  return 'none';
};


//------------------------------helpers-------------------------------
function prettify(arr) {
  resArr = arr.map(function(val) {
      return val.replace(/[()]/g, '').split(',');
  })
  return resArr;
}

function placement(arr) {
  var resArr = [];
  arr.forEach(function(row, rowInd) {
      row.forEach(function(col, colInd) {
          if (col === this.color) {
              resArr.push([rowInd, colInd]);
          }
      });
  });
  return resArr;
}

function createTestArr(arr, col) {
  var copy;
  var arrCopy = arrayCopier(arr);
  for (var row = 0; row < 6; row++) {
      if (arrCopy[row][col] !== 'x' && row !== 0) {
          arrCopy[row - 1][col] = this.color;
          return [arrCopy, row - 1];
      }
      if (row === 5 && arrCopy[row][col] === 'x') {
          arrCopy[row][col] = this.color;
          return [arrCopy, row]
      }
  }
  return null;
}

function isRow (arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      var valStr = arr[i].join('');
      if (this.regEx.test(valStr)) return true;
  }
  return false;
}

function isCol (arr) {
  var rowNum = arr.length;
  var colNum = arr[0].length;
  var flipArr = [];
  for (var col = 0; col < colNum; col++) {
      flipArrRow = [];
      for (var row = 0; row < rowNum; row++) {
          flipArrRow.push(arr[row][col])
      }
      flipArr.push(flipArrRow);
  }
  var flipLen = flipArr.length;
  for (var i = 0; i < flipLen; i++) {
      var valStr = flipArr[i].join('');
      if (this.regEx.test(valStr)) return true;
  }
  return false;
}

function isDiag(arr) {
  var places = placement(arr);
  var placesLen = places.length;

  for(var i = 0; i < placesLen; i++)  {
      var vert = places[i][0] <= 2 ? 'd' : 'u';
      var hor = places[i][1] <= 2 ? 'r' : (places[i][1] >= 4 ? 'l' : 'b');
      var type = vert + hor;
      var counter = 0;
      switch (type) {
          case 'dr':
              if (arr[places[i][0]+1][places[i][1]+1] === this.color &&
                  arr[places[i][0]+2][places[i][1]+2] === this.color &&
                  arr[places[i][0]+3][places[i][1]+3] === this.color) {
                  return true;
              }
              break;
          case 'dl':
              if (arr[places[i][0]+1][places[i][1]-1] === this.color &&
                  arr[places[i][0]+2][places[i][1]-2] === this.color &&
                  arr[places[i][0]+3][places[i][1]-3] === this.color)
              return true;
              break;
          case 'ur':
              if (arr[places[i][0]-1][places[i][1]+1] === this.color &&
                  arr[places[i][0]-2][places[i][1]+2] === this.color &&
                  arr[places[i][0]-3][places[i][1]+3] === this.color)
              return true;
              break;
          case 'ul':
              if (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                  arr[places[i][0]-2][places[i][1]-2] === this.color &&
                  arr[places[i][0]-3][places[i][1]-3] === this.color)
              return true;
              break;
          case 'db':
              if ((arr[places[i][0]+1][places[i][1]+1] === this.color &&
                  arr[places[i][0]+2][places[i][1]+2] === this.color &&
                  arr[places[i][0]+3][places[i][1]+3] === this.color) ||
                  (arr[places[i][0]+1][places[i][1]-1] === this.color &&
                  arr[places[i][0]+2][places[i][1]-2] === this.color &&
                  arr[places[i][0]+3][places[i][1]-3]))
              return true;
              break;
          case 'ub':
              if ((arr[places[i][0]-1][places[i][1]+1] === this.color &&
                  arr[places[i][0]-2][places[i][1]+2] === this.color &&
                  arr[places[i][0]-3][places[i][1]+3] === this.color) ||
                  (arr[places[i][0]-1][places[i][1]-1] === this.color &&
                  arr[places[i][0]-2][places[i][1]-2] === this.color &&
                  arr[places[i][0]-3][places[i][1]-3] === this.color))
              return true;
              break;
      }
  }
  return false;
}


function arrayCopier(arr) {
  var outArr = [];
  arr.forEach(function(val, ind) {
      outArr[ind] = Array.isArray(val) ? arrayCopier(val) : val;

  })
  return outArr;
}
 
// keep this function call here 
ConnectFourWinner(readline());