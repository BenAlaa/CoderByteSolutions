function QuestionsMarks(str) { 
  let condition = false;
  for(let i=0; i<str.length; i++){
      for(let j=i+1; j<str.length; j++){
          if(Number(str[i]) + Number(str[j])=== 10){
              condition = true;
              if(str.slice(i,j).split("?").length -1 < 3){
                  return false;
              }
          }
      }
  }
  return condition;
}
   
// keep this function call here 
QuestionsMarks(readline());