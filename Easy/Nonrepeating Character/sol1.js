function NonrepeatingCharacter(str) { 

  // code goes here  
  for(var i=0;i<str.length;i++){
      if(str.indexOf(str[i])===str.lastIndexOf(str[i])) return str[i];
  }
         
}
   
// keep this function call here 
NonrepeatingCharacter(readline());