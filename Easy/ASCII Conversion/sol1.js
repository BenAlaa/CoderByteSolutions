function ASCIIConversion(str) { 
  ans = []
  for(var i = 0; i < str.length; i++){
      if(str.charAt(i) === " "){
          ans.push(" ")
      } else{
          ans.push(str.charCodeAt(i))    
      }    
  }
// code goes here  
return ans.join("")
       
}
 
// keep this function call here 
ASCIIConversion(readline());