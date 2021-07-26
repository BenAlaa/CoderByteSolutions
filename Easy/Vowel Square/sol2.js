function VowelSquare(strArr) { 

  strArr = strArr.map(val =>{
      return val.replace(/[aeiou]/gi,'!');
  });
  
  for(let i=0; i<strArr.length-1; i++){
      for(let s=0; s<strArr[0].length-1;s++){
          if(checkOk(strArr,[i,s])){
              return `${i}-${s}`;
          }
      }
  }
   return 'not found';
}

function checkOk(arr,point){
  return (
      arr[point[0]][point[1]]=== '!' &&
      arr[point[0]+1][point[1]]=== '!' &&
      arr[point[0]][point[1]+1]=== '!' &&
      arr[point[0]+1][point[1]+1]=== '!'
      );
}
 
// keep this function call here 
VowelSquare(readline());