function SimpleMode(arr) { 

  let map = {};
  
  let greatestFreq = 1;
  let mode;
  for (let i=0; i<arr.length; i++) {
      if (map[arr[i]]) {
          map[arr[i]] ++;
      } else {
          map[arr[i]] = 1;
      }
      
      if (map[arr[i]] > greatestFreq) {
          greatestFreq = map[arr[i]];
          mode = arr[i];
      }
  }
  
  return (mode !== undefined) ? mode : -1; 
         
}
   
// keep this function call here 
SimpleMode(readline());












function SimpleMode(arr) { 

  // the table that will contain each number as the key
  // and the number of times it occurs as the value
  // e.g. {"5": 1, "3": 3, "1": 1}
  var table = {};

  // loop through each number in the array
  // see if this number already exists in table
  // if so add 1 to the count, if not set count = 1
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }

  // setup a new object that will store the number with the highest count
  var answer = {number: null, count: 1};
  
  // get the mode by determining what number appears most often in the table 
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }

  // return the mode if one exists
  return (answer["count"] === 1) ? -1 : answer["number"];       
}
   
// keep this function call here 
SimpleMode(readline());



















function SimpleMode(arr) { 

  var mc = 0,
      m = -1;
  
  for (var i = 0; i < arr.length; i++) {
    var c = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        c++;
      }
    }
    
    if (c > 1 && c > mc) {
      mc = c;
      m = arr[i];
    }
  }
  
  // code goes here
  return m; 
            
}
   
// this call is needed to test your function
// keep this when you submit your code
SimpleMode(arr)        

