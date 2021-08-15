function TransitivityRelations(strArr) {

  var rows = [];
  var mappings = {};
  var i = 0;
  for (var r of strArr) {
      var cols = r.replace(/[()]/g, '').split(',').map(t=> Number(t));
      rows.push(cols);
      var validCols = {};
      mappings[i] = validCols;
      for (var j = 0; j < cols.length; j++)
          if (cols[j] == 1)
              validCols[j] = true;

      i++;
  }

  var originalMappings = JSON.parse(JSON.stringify(mappings));;
  var chnagedSomthing;
  do {
      chnagedSomthing = false;
      for (var r = 0; r < rows.length; r++) {
          for (var c = 0; c < rows.length; c++) {
              if (!mappings[r][c])
                  continue;
              for (var r2 = 0; r2 < rows.length; r2++) {
                  if (r2 == r || r2 == c)
                      continue;
                  if (mappings[r2][r] && !mappings[r2][c]) {
                      mappings[r2][c] = true;
                      chnagedSomthing = true;
                  }
              }
          }
      }
  } while (chnagedSomthing)

  var res = "";
  for (var r in mappings) {
      for (var c in mappings[r]) {
          if (!originalMappings[r][c]) {
              if (res != '')
                  res += "-";
              res += '(' + r + ',' + c + ')'
          }
      }
  }
  // code goes here  
  return res || 'transitive';

}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TransitivityRelations(readline());







































function TransitivityRelations(strArr) { 
  let matrix = [];
  for(let i=0;i<strArr.length;i++){
      matrix[i] = strArr[i].replace('(','').replace(')','').split(',');
  }
  let result = [];
  for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix.length;j++){
          if(i==j) continue;
          if(matrix[i][j] == '1'){
              for(let a=0;a< matrix.length;a++){
                  if(matrix[j][a] == '1'){
                      if(matrix[i][a] == '0'){
                          if(i==a) continue;
                          result.push('(' + i + ',' + a + ')');
                          matrix[i][a] = 1;
                      }
                  }
              }
          }
      }
  }
  if(result.length == 0) return 'transitive';
  else{
      result.sort();
      let resultText = result.join('-');
      return resultText;
  }
}
 
// keep this function call here 
TransitivityRelations(readline());








































function TransitivityRelations (arr) {
  var result = '';

  // parse input
  arr.forEach(function (row, i) {
    arr[i] = row.match(/[01]/g).map(function (el) {
      if (el == 1) return true;
      return false;
    });
  });

  // check transitivity
  arr.forEach(function (row, from) {          // for this node
    var queue = [],
        visitied = new Array(arr.length),
        missing = [],
        curr;

    visitied[from] = true;
    row.forEach(function (val, to) { if (val) queue.push(to); }); // add next nodes to the queue
    while (queue.length > 0) {
      curr = queue.shift();           // for each el. in the queue
      if (visitied[curr]) continue;
      if (!arr[from][curr]) missing.push(curr);
      visitied[curr] = true;
      arr[curr].forEach(function (val, to) { if (val && !visitied[to]) queue.push(to); });
    }

    missing.sort(function (a, b) { return a - b;} );
    missing.forEach(function (to) {
      result += result.length > 0? '-': '';
      result += '(' + from + ',' + to + ')';
    });
  });

  return result.length > 0? result: 'transitive';
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TransitivityRelations(readline());









































function transitivity(strArr) {
  "use strict";
  var lastRow = strArr.length - 1,
      r,
      c,
      arr = [],
      connections = [],
      first,
      second,
      third,
      needed,
      str,
      inside;

  for (r = 0; r <= lastRow; r += 1) {
      inside = strArr[r].match(/[0-1],[0-1](((,[0-1])?,[0-1])?,[0-1])?/);
      inside = inside[0].split(',');
      arr.push(inside);
  }
  for (r = 0; r < arr.length; r += 1) {
      for (c = 0; c < arr[0].length; c += 1) {
          if (arr[r][c] === "1") {
              str = [r, c].join('');
              connections.push(str);
          }
      }
  }

  function checkTransitivity(con) {
      var trans = [];
      con.forEach(function (element, index, array) {
          var x = element[0],
              y = element[1],
              i = 0,
              goal;
          for (i; i < array.length; i += 1) {
              if (x !== y && i !== index && array[i].indexOf(y) > -1) {
                  goal = array[i][1];
                  goal = [x, goal].join('');
              }
              if (goal !== undefined && goal[0] !== goal[1] && con.indexOf(goal) < 0 && trans.indexOf(goal) < 0) {
                  con.push(goal);
                  trans.push(goal);
              }
          }
      });
      return trans;
  }

  first = checkTransitivity(connections);
  second = checkTransitivity(connections);
  third = checkTransitivity(connections);
  needed = first.concat(second, third);
  if (needed.length === 0) {
      return "transitive";
  }
  needed.sort(function (a, b) {
      return a - b;
  });
  return needed.map(function (element, index, array) {
      return "(" + element.split('').join() + ")";
  }).join('-');
}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
transitivity(readline());
