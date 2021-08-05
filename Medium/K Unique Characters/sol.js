function KUniqueCharacters(str) { 

  // code goes here  
  let result = [], longest = str[0];
  
  for(let i = 0; i < str.length; i++){
      let table = {}, ans = '', counter = 0;
      for(let j = i; j < str.length; j++){
          if(table[str[j]] === undefined){
              table[str[j]] = 1;
              counter++;
          }
          if(counter <= str[0]){
              ans += str[j];
          }
      }
      if(ans.length > longest){
          longest = ans.length;
          result.push(ans);
      }
  }
  return result.sort(function(a,b){
      return  b.length - a.length;
  })[0];
         
}
   
// keep this function call here 
KUniqueCharacters(readline());



























function KUniqueCharacters(str) {  
  let  arr=[], longest = str[0]
   
  for (let i=1; i<str.length; i++) {
      let table = {}
      let ans = ""
      let count = 0
          for (let j=i; j<str.length; j++) {
              if (table[str[j]] === undefined) { 
                  table[str[j]] = 1
                  count++
              }
              if (count <= str[0]) {
                  ans += str[j]
              }
          }
          if (ans.length > longest) {
              longest = ans.length
              arr.push(ans)
          }
  }
  return arr.sort(function(a,b) {return b.length-a.length})[0]
  } 
  KUniqueCharacters(readline());



























  function KUniqueCharacters(str) { 
    var arr = str.split(''),
        k = arr.shift();
     
    var longest = {};
    longest.count = 0;
    longest.str = "";
    
    //determine the number of unique characters and compare to provided limit of K
    function testUniqueLimit(subArray){
        var uniqueLetters = subArray.filter(function(char,i,arr){return arr.indexOf(char) === i});
        return uniqueLetters.length <= k;
    }
    
    //compare current substring to longest substring that we've found thus far and keep the longest
    function compareLength(subArray){
        if(subArray.length>longest.count){
                longest.count = subArray.length;
                longest.str = subArray.join("");
        }
    } 
    
    
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            var tempArr = arr.slice(i,j+1);
            if(testUniqueLimit(tempArr)){
                compareLength(tempArr);
            }
        }
    }
        
    return longest.str;
         
}
   
// keep this function call here 
KUniqueCharacters(readline());




































function KUniqueCharacters(str) { 
  var target = str.substring(0,1);
  var str1 = str.substring(1);
  var answer = [];
  
  for( var i = 0 ; i < str1.length ; i++ ){
      for( var j = i + 1 ; j <= str1.length ; j++ ){
          var temp = str1.substring(i,j);
          if( testUnique(temp, parseInt(target) ) ){
              answer.push(temp);
          }
      }
  }
  var sorted = answer.sort(function(a,b ){
      if( a.length > b.length ){
          return -1;
      }else if( a.length < b.length ){
          return 1;
      }else{
          return 0;
      }
  });
  return sorted[0];
}

function createObj(str){
  str = str.split("");
  return str.reduce(function(counts, each ){
      counts[each] = counts[each] + 1 || 1;
      return counts;
  },{});
  
}
function testUnique(str, n){
  var counts = createObj(str);
  var char = Object.keys(counts).length;
  if( char === n ){
      return true;
  }
}
 
// keep this function call here 
KUniqueCharacters(readline());