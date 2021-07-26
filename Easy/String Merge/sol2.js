function StringMerge(str) { 
  let arr1= str.split("*")[0].split('');
  let arr2 = str.split("*")[1].split('');
  let output = '';
  arr1.forEach(function(ele,index){
     output+= `${ele}${arr2[index]}`; 
  });
  return output;
}
 
// keep this function call here 
StringMerge(readline());