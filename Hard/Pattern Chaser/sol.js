function PatternChaser(str) { 
  let len = str.length;
  let halfLen = Math.floor(len/2);
  
  for(let i = halfLen; i>1; i--){
      for(let j=0; j<len -i; j++){
          let text = str.substr(j,i);
          let regText = new RegExp(text,'g');
          let textString = str.match(regText);
          if(textString.length>1){
              return 'yes ' + text;
          }
      }
  }
  
  return 'no null';
}
 
// keep this function call here 
PatternChaser(readline());
































function stringCompare(first,second){
  var str="";
  var letter="";
  for(var i=0;first.length;i++){
    letter=first.substr(i,1);
    if(letter!==second.substr(i,1)){
      break;
    }
    str=str+letter;
  }
 return str;
}
function PatternChaser(str) {
  var suffixArray=[];
  var res="";
  var curr="";
  for(var i=0;i<str.length;i++){
    suffixArray[i]=str.substr(i);
  }
  suffixArray.sort();
  for(var i=0;i<suffixArray.length-1;i++){
    res=stringCompare(suffixArray[i],suffixArray[i+1]);
    if(res.length>curr.length){curr=res;}
  }
  return curr.length<2?"no null":"yes "+curr;
}

PatternChaser(readline());



































function PatternChaser(str) {
  const patterns = findPatterns(str);

  return patterns ? `yes ${patterns.reduce(longest)}` : 'no null';
}

function findPatterns(str) {
  return str.match(/(w{2,})(?=.*1)/g);
}

function longest(a, b) {
  return a.length > b.length ? a : b;
}
   
// keep this function call here 
PatternChaser(readline());










































function PatternChaser(str){
  // an array to hold the substring
  var subs = [];
  // start with the largest pattern length
  for(i = str.length-1; i > 1; i--){
    //loop through all the substrings of that pattern length
    for(j = 0; j < str.length-i+1; j++){
      //push each substring to the array
      subs.push(str.substring(j, (j+i)))
      //log the most recent substring
      var recent = subs[subs.length-1]
      //hunt for any previous matches to the current substring
      for (k = subs.length-2; k > -1; k--){
        if (recent === subs[k-i+1]){
          //return a match if found
          return ("yes "+ recent)
        }
      } 
    }
  }
    return ("no " + null);
  }
     
  // keep this function call here 
  PatternChaser(readline());
