function LetterCountI(str) { 
  str=str.split(" ");
  var temp="";
  var counts=[];
  for(var i=0; i<str.length; i++){
      temp= "00" + str[i];
      counts.push(temp.split("").sort().join("").match(/(\w)\1+/gi).length);
  }
// code goes here  
return Math.max(...counts)>1?str[counts.indexOf(Math.max(...counts))]:-1; 
}
// keep this function call here 
LetterCountI(readline());