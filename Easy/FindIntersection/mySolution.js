function FindIntersection(strArr) { 

  // code goes here  
  const arr1 = strArr[0].split(', ');
  const arr2 = strArr[1].split(', ');
  const intersctionArr = arr1.filter(val => arr2.includes(val))
  const returnedValue = intersctionArr.length > 0 ? intersctionArr.join(',') : false;
  return returnedValue; 

}
   
// keep this function call here 
console.log(FindIntersection(readline()));