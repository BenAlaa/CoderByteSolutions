function NoughtsDeterminer(strArr) { 

  
  var swag = strArr.join('').match(/[XO-]/g);
  var yolo = [];
  

  for (i=0;i<swag.length;i++){
      if (swag[i]=="X"){
      yolo[i] = 1;}
    else if (swag[i]=="O"){
      yolo[i] = 10;}
    else {
      yolo[i] = 0;}}
  
  function diagcheck(arr){
    var test = [];
    test[0] = arr[0] + arr[4] + arr[8];
    test[1] = arr[2] + arr[4] + arr[6];
    if ((test[0]==3)|(test[1]==3)|(test[0]==30)|(test[1]==30)){
      return 1;}
    else {
      return 0;}}
  
  function hcheck(arr){
    var test = [];
    test[0] = arr[0] + arr[1] + arr[2];
    test[1] = arr[3] + arr[4] + arr[5];
    test[2] = arr[6] + arr[7] + arr[8];
    
    if ((test[0]==3)|(test[1]==3)|(test[2]==3)|(test[0]==30)|(test[1]==30)|(test[2]==30)){
      return 1;}
    else {
      return 0;}}
  
  function vcheck(arr){
    var test = [];
    test[0] = arr[0] + arr[3] + arr[6];
    test[1] = arr[1] + arr[4] + arr[7];
    test[2] = arr[2] + arr[5] + arr[8];
    if ((test[0]==3)|(test[1]==3)|(test[2]==3)|(test[0]==30)|(test[1]==30)|(test[2]==30)){
      return 1;}
    else {
      return 0;}}
  
  
  var index;
  var count = 0;

  for (i=0;i<yolo.length;i++){
    if (yolo[i]==0){
      yolo[i] = 1;
      count += parseInt(hcheck(yolo));
      count += parseInt(vcheck(yolo));
      count += parseInt(diagcheck(yolo));
      yolo[i] = 10;
      count += parseInt(hcheck(yolo));
      count += parseInt(vcheck(yolo));
      count += parseInt(diagcheck(yolo));
      yolo[i] = 0;
    }
    if (count>0){
      index = i;
      break;
    }
  }
  
  if (index<3){
    return index;}
  else if ((index>2)&&(index<6)){
    return index+1;}
  else  {
    return index+2;}         
}

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NoughtsDeterminer(readline());





































function toMatrix(strArr) {
  var matrix = [];
  var y = 0;
  var x = 0;

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] == "<>") continue;
    if (x == 0) matrix[y] = [];
    if (strArr[i] == "X" || strArr[i] == "O") matrix[y][x] = strArr[i];
    if (strArr[i] == "-") matrix[y][x] = i;
    x++;
    if (x > 2) {
      x = 0;
      y++;
    }
  };

  return matrix;
}

function winning(matrix) {

  // Check horizontal wins
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) return true;
    if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) return true;
  };

  if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) return true;
  if (matrix[2][0] == matrix[1][1] && matrix[1][1] == matrix[0][2]) return true;

  return false;
}

function NoughtsDeterminer(strArr) { 

  // code goes here  
  var matrix = toMatrix(strArr);

  for (var y = 0; y < 3; y++) {
    console.log(matrix[y]);
  }

  for (var y = 0; y < 3; y++) {
    for (var x = 0; x < 3; x++) {
      var space = matrix[y][x];
      if (matrix[y][x] != "X" && matrix[y][x] != "O") {

        matrix[y][x] = "O";
        if (winning(matrix)) return space;

        matrix[y][x] = "X";
        if (winning(matrix)) return space;

        matrix[y][x] = space;
      }
    }
  };
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NoughtsDeterminer(readline());









































function NoughtsDeterminer(strArr) {
  var $this = this;
  
  function initBoard() {
    return [strArr.slice(0, 3), strArr.slice(4, 7), strArr.slice(8, 11)];
  }
  
  function isWinning(i, j, piece) {
    var winningI = winningJ = true,
      winningDiag1 = i == j,
      winningDiag2 = i + j == 2;
    for ( var k = 0; k < 3; k++ ) {
      if ( k != j && $this.board[i][k] != piece ) {
        winningI = false;
      }
      if ( k != i && $this.board[k][j] != piece ) {
        winningJ = false;
      }
      if ( i == j && k != i && $this.board[k][k] != piece ) {
        winningDiag1 = false;
      }
      if ( i + j == 2 && k != i && $this.board[k][2-k] != piece ) {
        winningDiag2 = false;
      }
    }
    return winningI || winningJ || winningDiag1 || winningDiag2;
  }
  
  this.board = initBoard();
  
  this.where = function() {
    for ( var i = 0; i < $this.board.length; i++ ) {
      for ( var j = 0; j < $this.board[i].length; j++ ) {
        if ( $this.board[i][j] == "-" &&
          (isWinning(i, j, "X") || isWinning(i, j, "O")) ) {
          return i * 4 + j;
        }
      }
    }
    return -1;
  };
}

function solve(strArr) {
  return new NoughtsDeterminer(strArr).where();
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
solve(readline());













































function check(symbol,index,arr){
  var cont=0;
  var pos=-1;
  for (var i=0;i<3;i++)
  {
    if (arr[index[i]]==symbol)
    {
      cont++;
    }
    else if (arr[index[i]]=="-")
    {
      pos=index[i];
    }
    else return -1;
  }
  if (cont==2) return pos;
  return -1;
}
function NoughtsDeterminer(strArr) {
  var sym=["X","O"];
  var comb=[
      [0,1,2],[3,4,5],[8,9,10],
      [0,4,8],[1,5,9],[2,6,10],
      [0,5,10],[2,5,8]
  ];
  var res=-1;
  for (var i=0;i<2;i++)
  {
    for (var j=0;j<comb.length;j++)
    {
      res=check(sym[i],comb[j],strArr);
      if (res>=0) return res;
    }
  }  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NoughtsDeterminer(readline());