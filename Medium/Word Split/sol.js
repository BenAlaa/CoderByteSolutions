function WordSplit(strArr) {
  dict=strArr[1].split(',')
  for(i=0;i<dict.length;i++){
      for(j=0;j<dict.length;j++){
          if(dict[i]+dict[j]===strArr[0]){
              return dict[i]+','+dict[j]
          }
      }
  }
  return 'not possible'
}
 
// keep this function call here 
WordSplit(readline());






















function WordSplit(strArr){
  var word = strArr[0]; var chars = "";
  var wordsArr = strArr[1];
  var result = "";
  for(var i=0; i<word.length; i++){
      chars += word[i];
      var newStr = word.slice(i+1);
      if(wordsArr.includes(chars) && wordsArr.includes(newStr)){
    return chars+","+newStr;
  }
  }
  return "not possible";
}    
// keep this function call here 
WordSplit(readline());





























function WordSplit(strArr) { 
  var dictionary = strArr[1].split(',');
  for(var i = 0; i < strArr[0].length; i++){
      var firstWord = strArr[0].slice(0, i);
      var secondWord = strArr[0].slice(i);
      if(dictionary.includes(firstWord) && dictionary.includes(secondWord)){
          return firstWord + ',' + secondWord
      }
  }
  // code goes here  
  return 'not possible' 
         
}
   
// keep this function call here 
WordSplit(readline());



























function WordSplit(strArr) { 
  strArr[1] = strArr[1].split(',');
  for(var i=0; i<strArr[1].length; i++){
      for(var k=0; k<strArr[1].length; k++){
          if(strArr[0] === strArr[1][i].concat(strArr[1][k])){
              return strArr[1][i] + ',' + strArr[1][k];
          } else if(strArr[0] == strArr[1][k].concat(strArr[1][i])){
              return strArr[1][k] + ',' + strArr[1][i];
          }
      }
  }
  
  return "not possible";
}
 
// keep this function call here 
WordSplit(readline());


























function WordSplit(strArr) {
  
  let word = strArr[0];
  let dictionary = strArr[1].split(',');
  
  let len = word.length; 
  
  for(var i=1; i<= len; i++){
    
    let w1 = word.substr(0,i);
    let w2 = word.substr(i,len);
    
    if (dictionary.includes(w1) && dictionary.includes(w2)) {
      return `${w1},${w2}`
    }
    
  }
  
  return 'not possible'
}

   
// keep this function call here 
WordSplit(readline());