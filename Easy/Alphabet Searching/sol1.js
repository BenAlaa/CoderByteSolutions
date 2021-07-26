function AlphabetSearching(str) { 
  let output = [];
  let arr = str.split('');
  arr.forEach(function(e){
      if(e.match(/[a-z]/gi) && !output.includes(e)){
          output.push(e)
      } 
  });
  return output.length === 26;
 }
    
 // keep this function call here 
 AlphabetSearching(readline());