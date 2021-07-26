function LargestPair(num) { 
    
  var stringnum = "" + num;
  var split = stringnum.split("");
  
  var sets = [];
  
  for( var i = 0 ; i < split.length - 1; i++){
      
      var temp = split[i] + split[i+1];
      sets.push( temp );
  }
  
  sets.map(function(each){
      return Number(each);
  });
  
  return sets.sort(function(a,b){
      return b-a;
  })[0];
  

       
}
 
// keep this function call here 
LargestPair(readline());