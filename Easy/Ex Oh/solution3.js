unction ExOh(str) { 

  var countX = 0
  var countO = 0
  
  for (i = 0; i < str.length; i++) {
      if (str[i] == 'x')
        countX++
      if (str[i] == 'o')
        countO++
  }
  if (countX == countO)
    return true
  else
    return false
         
}
   
// keep this function call here 
ExOh(readline());