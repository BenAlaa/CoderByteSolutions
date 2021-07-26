function ArrayMatching(strArr) { 
  var arr1 = strArr[0].match(/[0-9]+/g);
  var arr2 = strArr[1].match(/[0-9]+/g);
  var arr3 = [];
  var longest;
  var shortest;
  if(arr1.length > arr2.length){
      longest = arr1;
      shortest = arr2;
  }
  else{
      longest = arr2;
      shortest = arr1;
  }
  for(i=0;i<longest.length;i++){
      if(shortest[i]){
          arr3.push(Number(shortest[i]) + Number(longest[i]));
      }
      else{
          arr3.push(longest[i]);
      }
  }
  return arr3.join('-');
}
 
// keep this function call here 
ArrayMatching(readline());