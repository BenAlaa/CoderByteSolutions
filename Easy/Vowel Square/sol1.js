function VowelSquare(strArr) { 
  var vowels = 'aeiou'.split('');
  
  for (var i = 0; i < strArr.length - 1; i++){
      for (var j = 0; j < strArr[i].length - 1; j++){
          var char = strArr[i][j];
          
          if(vowels.indexOf(char) > -1){
              if(vowels.indexOf(strArr[i][j + 1]) > -1){
                  if(vowels.indexOf(strArr[i + 1][j]) > -1){
                      if(vowels.indexOf(strArr[i + 1][j + 1]) > -1){
                          return i + '-' + j;
                      }
                  }
              }
          }
      }
  }

  return 'not found'; 
}
 
// keep this function call here 
VowelSquare(readline());