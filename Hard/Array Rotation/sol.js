function ArrayRotation(arr) { 
  const n = arr[0];
  const result = [];
  for (let i = n; i < arr.length; i++) {
      result.push(arr[i]);
  }
  if (n > 0) {
     for (let i = 0; i < n; i++) {
         result.push(arr[i]);
     } 
  }
  return result.join('');
}
 
// keep this function call here 
ArrayRotation(readline());

































function ArrayRotation(arr) { 

  // code goes here  
  var result = arr.splice(0, arr[0]);
  return arr.concat(result).join("");
         
}
   
// keep this function call here 
ArrayRotation(readline());



































function ArrayRotation(arr) {

  // coderbyte starts here
  let strArr = "";
  let cursor = Number(arr[0]);
  let length = arr.length;
  let hasShifted = false;
  let idx = 0;
  for (let i = 0; i < length; i++) {
      if ((idx >= (length - 1)) || (hasShifted === true)) {
          if(!hasShifted) {
              hasShifted = true;
              idx = 0;
          } else {
              idx ++;
          }
      } else {
          idx = i + cursor
      }
      strArr += arr[idx];
  }

  return strArr;
}

 
// keep this function call here 
ArrayRotation(readline());





































function ArrayRotation(arr) { 
  let targetIndex = arr[0];
  let rotate = arr.slice(targetIndex);
  let notRotate = arr.slice(0,arr[0]);
  return rotate.concat(notRotate).toString().replace(/,/g,'');
       
}
ArrayRotation(readline());