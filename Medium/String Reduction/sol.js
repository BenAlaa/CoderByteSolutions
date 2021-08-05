function StringReduction(str) { 
  var res = str.length + 1;
    while(res>str.length){
      res = str.length;
      str = str.replace(/ab|ba/, 'c');
      str = str.replace(/ca|ac/, 'b');
      str = str.replace(/bc|cb/, 'a');
    } ;
       
    // code goes here  
    return str.length; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  StringReduction(readline());

  

















  function StringReduction(str) {
    let chars = str.split('');
    let replacers = {
      'ab': 'c',
      'ac': 'b',
      'ba': 'c',
      'bc': 'a',
      'ca': 'b',
      'cb': 'a',
    };
  
    let reduce = (chars) => {
      for (let i = 1; i < chars.length; i++) {
        let combo = chars[i - 1].concat(chars[i]);
        if ( replacers[combo] ) {
          chars.splice(i - 1, 2, replacers[combo]);
          i-=1;
        }
      }
      if (new Set(chars).size !== 1) {
        reduce(chars);
      }
    };
  
    reduce(chars);
    return chars.length;
  }
     
  // keep this function call here 
  StringReduction(readline());
  





















  function StringReduction(str) { 

    var arr = str.split('') 
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] !== arr[i+1] && !(arr[i]+arr[i+1]).match(/c/) === true) {
        arr.splice(i,2,'c')
        i = -1
      }
      else if (arr[i] !== arr[i+1] && !(arr[i]+arr[i+1]).match(/b/) === true) {
        arr.splice(i,2,'b')
        i = -1
      }
      else if (arr[i] !== arr[i+1] && !(arr[i]+arr[i+1]).match(/a/) === true) {
        arr.splice(i,2,'a')
        i = -1
      }
    }
    return arr.length 
           
  }
     
  // keep this function call here 
  StringReduction(readline());
  