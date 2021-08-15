function ChessboardTraveling(str) {
  var regEx = /^\((\d\s\d)\)\((\d\s\d)\)$/;
  var isFormatted = regEx.test(str);
  if (isFormatted) {
    var horShift = parseInt(str.charAt(8), 10) - parseInt(str.charAt(3), 10);
    var vertShift = parseInt(str.charAt(6), 10) - parseInt(str.charAt(1), 10);
    return factorial(horShift + vertShift) / (factorial(vertShift) * factorial(horShift));
  } else
    return 'error'
}
function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}
ChessboardTraveling(readline());


































function ChessboardTraveling(str) {
  regEx = /\d/
  var isFormatted = regEx.test(str);

  if (isFormatted) {
      var horShift = parseInt(str.charAt(8), 10) - parseInt(str.charAt(3), 10);
      var vertShift = parseInt(str.charAt(6), 10) - parseInt(str.charAt(1), 10);
      return factorial(horShift + vertShift) / (factorial(vertShift) * factorial(horShift));
  } else {
    return isFormatted
  }
}

function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}
 
// keep this function call here 
ChessboardTraveling(readline());







































function ChessboardTraveling(str) { 
  var arr=str.substring(1,str.length-1).split(")(");
  var arr1 = arr[0].split(" ");
  var arr2 = arr[1].split(" ");
  var x=arr1[0];
  var y=arr1[1];
  var a=arr2[0];
  var b=arr2[1];
  
  if (x>a || y>b) return 0;
  
  var i=new Number(a-x);
  var j=new Number(b-y);
  
  
  
// code goes here  
return fact(i+j)/(fact(i)*fact(j)); 
       
}

function fact(a) {
  return a==1?1:a*fact(a-1);
}
 
// keep this function call here 
ChessboardTraveling(readline());