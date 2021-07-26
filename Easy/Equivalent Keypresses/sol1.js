function EquivalentKeypresses(strArr) { 
  function reduce(str) {
    let result = "";
    str = str.split(",");
    str.forEach(function (item, index) {
      if (str[index + 1] !== "-B" && str[index] !== "-B") {
        result += item;
      }
    })
    return result;
  }
  // code goes here  
  return reduce(strArr[0]) == reduce(strArr[1]); 

}
   
// keep this function call here 
console.log(EquivalentKeypresses(readline()));