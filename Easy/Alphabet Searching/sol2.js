function AlphabetSearching(str){
  const hash = {};
  const alph = 'abcdefghijklmnopqrstuvwxyz'
  
  let res = str.replace(/[^a-zA-Z]/g, "")
  // console.log(res)
  
  var count = 0; 
  
  for(var c of res){
    
    if ( hash[c] == undefined) { hash[c] = 1 } 
    else { 
      hash[c] += 1; 
    }
  }
  // console.log(hash)
  return Object.keys(hash).length >= 26 
  
}
   
// keep this function call here 
AlphabetSearching(readline());