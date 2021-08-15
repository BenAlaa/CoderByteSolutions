function cartesianProductOf() {
  return Array.prototype.reduce.call(arguments, function(a, b) {
    var ret = [];
    a.forEach(function(a) {
      b.forEach(function(b) {
        ret.push(a.concat([b]));
      });
    });
    return ret;
  }, [[]]);
}
function beetween(values, min, max){
    for (var i=0,n=values.length;i<n;i++) {
        if (values[i]>max || values[i]<min) return false;
    }
    return true;
}

function sum(arr1, arr2){
    var res=[];
    for (var i=0,n=Math.min(arr1.length, arr2.length);i<n;i++) {
        res.push(arr1[i]+arr2[i]);
    }
    return res;
}

function KnightJumps(str) {
    var pos_count=0;
    var pos=str.match(/d+/g).map(function(i){ return parseInt(i); });
    var index=[
        [-1,1],
        [-2,2]
    ];

    var movements=cartesianProductOf(index[0], index[1]).concat(cartesianProductOf(index[1], index[0]));
    if (!beetween(pos, 1, 8)) return 0;
    for (var i=0, n=movements.length;i<n;i++) {
        if (beetween(sum(pos, movements[i]), 1, 8)) pos_count++;
    }
    return pos_count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KnightJumps(readline());







































function KnightJumps(str) { 

  // put str in an array of 2 elts for coords
  str = str.replace(/[()]/g, "").split(" ");
  var arr = str.map(function(elt){
    return Number(elt); 
  });
                
  
  
  var offSets = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
  
  function isInside(coord){
      return coord[0] >= 1 && coord[0] <= 8 && 
              coord[1] >= 1 && coord[1] <= 8 ;
  }
   var count = 0;            
   for(var i = 0; i < offSets.length; i++){   
       var val = [arr[0] + offSets[i][0], arr[1] + offSets[i][1] ];
       if(isInside(val))
          count++;
   }
    return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KnightJumps(readline());






































function KnightJumps(str) { 
  var X = parseInt(str.charAt(1));
  var Y = parseInt(str.charAt(3));
  var moves = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
  var count = 0;
  for (var i = 0; i < moves.length; i++) {
    var x = moves[i][0] + X;
    var y = moves[i][1] + Y;
    if (x >= 1 && x <= 8 && y >= 1 && y <= 8)
      count++;
  }
  return count;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KnightJumps(readline());








































function KnightJumps(str) { 
  var knightX = str.substr(1, 1) * 1;
  var knightY = str.substr(3, 1) * 1;
  var knightComposite = knightY * 8 + knightX;
  var vectors = [-17, -15, -10, -6, 6, 10, 15, 17];
  var valids = 0;
  var dirs = "";
  for (dir = 0; dir < vectors.length; dir++) {
    var newpos = knightComposite + vectors[dir];
    if (newpos < 9 || newpos > 72) continue;
    if (knightX <= 2 && (dir == 2 || dir == 4)) continue;
    if (knightX == 1 && (dir == 0 || dir == 6)) continue;
    if (knightX >= 7 && (dir == 3 || dir == 5)) continue;
    if (knightX == 8 && (dir == 1 || dir == 7)) continue;
    valids++;
    dirs += dir;
  }
  // code goes here  
  str = valids;
//  str = dirs;
//  str = knightComposite;
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KnightJumps(readline());