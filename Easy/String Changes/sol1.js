function StringChanges(str) { 

  // code goes here  
  let strArr = str.split('');
  let newStrArr = [];
  
  for(let i = 0;i<strArr.length;i++)
  {
    if(strArr[i] === "M")
    {
      if(i > 0 )
      {
        strArr[i] = strArr[i-1]
      }
      else
      {
        delete strArr[i];
      }

    }
    else if(strArr[i] === "N")
    {
        if(i < strArr.length  )
      {
          delete strArr[i+1];
          delete strArr[i];
      }
   
    }
  }
  
  return String(strArr.toString()).replace(/,/g,""); 

}
   
// keep this function call here 
console.log(StringChanges(readline()));