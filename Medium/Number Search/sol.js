function NumberSearch(str) { 

  let numbers = str.match(/\d/g); 
  let letters = str.match(/[a-zA-Z]/g);
  sum = numbers.reduce((sum, num) => {
      return parseInt(sum) + parseInt(num);
  })
  return Math.round(sum / letters.length); 
         
}
   
// keep this function call here 
NumberSearch(readline());
















function NumberSearch(str) { 

  if (!str.match(/[0-9]/g)){return 0}
  var num = str.match(/[0-9]/g).reduce(function(a,b){return parseInt(a)+parseInt(b)})
  var div = str.match(/[a-z]/gi).length
  return Math.round(num/div) 
         
}
   
// keep this function call here 
NumberSearch(readline());























function NumberSearch(str) { 

  var numbers = str.match(/\d/g)
  
  if (numbers === null) return 0
  
  numbers = numbers.map(x => parseInt(x))
  
  var letters = str.match(/[a-zA-Z]/g)
  var total = numbers.reduce((a, b) => a + b)
  var len = letters.length
  
  var output = Math.round(total / len) 
  
  return output  
}
   
// keep this function call here 
NumberSearch(readline());