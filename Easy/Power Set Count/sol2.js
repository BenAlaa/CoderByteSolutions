function PowerSetCount(arr) { 
  var sets =[[]];

  for ( var i = 0 ; i < arr.length ; i++ ){
      for( var j = 0 , len = sets.length ; j < len ; j++ ){
          var temp = sets[j].concat(arr[i]);
          sets.push(temp);
      }
  }return sets.length;
       
}
 
// keep this function call here 
PowerSetCount(readline());