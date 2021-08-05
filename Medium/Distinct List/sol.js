function DistinctList(arr) { 
  var counter = 0;
  var len = arr.length;
   var unique = arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  })
    return len - unique.length; 
  }
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  DistinctList(readline());












  function DistinctList(arr) { 

    let list = new Set();
    let dupes = 0;
    
    for (let i=0; i<arr.length; i++) {
        if (list.has(arr[i])) {
            dupes++;
        } else {
            list.add(arr[i]);
        }
    }
    
    return dupes; 
           
  }
     
  // keep this function call here 
  DistinctList(readline());





















  function DistinctList(arr) { 

    var result = 0
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] === arr[i+1]) {
        result += 1
      }
    }
    return result 
           
  }
     
  // keep this function call here 
  DistinctList(readline());

























  function DistinctList(arr) { 
    var elements=[arr[0]];
    var duplicates=0;
    for(var i=1;i<arr.length;i++){
      if(elements.indexOf(arr[i])==-1){
        elements.push(arr[i]);
      }else{
        duplicates++;
      }
    }
    // code goes here  
    return duplicates; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  DistinctList(readline());

























  function DistinctList(arr) {
    const uniques = [];
    let duplicates = 0;
  
    arr.forEach(n => {
  
      if (uniques.indexOf(n) === -1) {
        uniques.push(n);
      } else {
        duplicates++;
      }
  
    });
  
    return duplicates;
  }
     
  // keep this function call here 
  DistinctList(readline());
  

