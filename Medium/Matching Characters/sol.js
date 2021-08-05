function MatchingCharacters(str) { 
  let max = 0;
  
  for (let i = 0; i < str.length - 1; i++) {
      let l = str.charAt(i);
      let j = str.lastIndexOf(l);
      
      if (j > i) {
        let unique = [];
        
        for (let k = i + 1; k < j; k++) {
            let char = str.charAt(k);
            if (unique.indexOf(char) == -1) {
                unique.push(char)
            }
        }
        
        if (unique.length > max)
            max = unique.length;
      }
  }
  
  // code goes here  
  return max; 
         
}
   
// keep this function call here 
MatchingCharacters(readline());





































function MatchingCharacters(str) { 
  var maxCount = 0; 
  
//find matching letters 
for(var i = 0; i < str.length; i++){
  var startIdx = i;
  for(var j = i; j < str.length; j++){
    if(str[j] === str[startIdx]){
      var endIdx = j; 
      if (countUniqueChars(str.slice(startIdx+1, endIdx)) > maxCount){
        maxCount = countUniqueChars(str.slice(startIdx+1, endIdx));
        console.log(str.slice(startIdx+1, endIdx));
      }
    }
  }
}
    return maxCount;     
}

function countUniqueChars(str){
    var fh = {};
    var count = 0;
    if(str.length === 1){
      return 0;
    }
    for(var i = 0; i < str.length; i++){
      if(fh[str[i]]){
        fh[str[i]] = fh[str[i]] + 1; 

      } else {
        fh[str[i]] = 1; 
        count += 1; 
      }
    }
    return count;
}
   
// keep this function call here 
MatchingCharacters(readline());








































function MatchingCharacters(str) { 
  var used = [];
  var potential = [];
  for (var i = 0; i < str.length; i++) {
      if (used.indexOf(str.charAt(i)) === -1) {
          used.push(str.charAt(i));
          var arr = str.split(str.charAt(i)).map(function(el) {
            return el.length;
        });
        arr[0] = 0;
        arr[arr.length-1] = 0;
        potential.push(Math.max.apply(null, arr));
      }
  }

return Math.max.apply(null, potential); 
       
}
 
// keep this function call here 
MatchingCharacters(readline());




































function MatchingCharacters(str) {
	var chars = str.split("");

	return Math.max(...chars.map((a, i, arr) => arr.lastIndexOf(a))
		.map((a, i, arr) => {
			if (a < i + 2) {  // need at least one char between
				return 0;
			}
			return chars.slice(i + 1, a).filter((x, i, arr) => 
				i === arr.lastIndexOf(x)).length;
		}));
}
   
MatchingCharacters(readline());