function Wildcards(input) { 

  let [pattern, str] = input.split(" ")
  let regex = []  
  let group = 1

  for(let i=0; i<pattern.length; i++) {
    switch(pattern[i]) {
      case "+":
        regex.push("\\w")
        break
      case "$":
        regex.push("\\d")
        break
      case "*":
        if(i < pattern.length && pattern[i+1] === "{") {
          regex.push("(.)\\" + (group++) + "{" + (pattern[i+2] - 1) + "}")
        } else {
          regex.push("(.)\\" + (group++) + "{2}")
        }
        break
    }
  }

  return str.match("^" + regex.join("") + "$") !== null
}

// keep this function call here 
console.log(Wildcards(readline()));









































function Wildcards(str) { 

  let regexPattern = '';
  const [pattern, word] = str.split(' ');
  let index = 0;
  let otherIndex = 0;
  let smallString = '';
  while (index < pattern.length) {
    if (pattern[index] === '+') {
      regexPattern += '[a-z]';
      index++;
    } else if (pattern[index] === '$') {
      regexPattern += '[1-9]';
      index++;
    } else if (pattern[index] === '*') {
      if (pattern[index+1] === '{') {
        otherIndex = index+2;
        while(pattern[otherIndex] !== '}') {
          otherIndex++;
        }
        smallString = pattern.substring(index+1, otherIndex+1)
        regexPattern += `.${smallString}`;
        index = otherIndex + 1;
        smallString = '';
      } else {
        regexPattern += '.{3}';
        index++;
      }
    }
  }
  let re = new RegExp('^' + regexPattern + '$');
  return re.test(word);
}
   
// keep this function call here 
console.log(Wildcards(readline()));












































function Wildcards(str) { 
  // code goes here  
  var arr = str.split(" ");
  var pattern = arr[0]
  var word = arr[1]
  var regexPtn = "";

  for (let i = 0; i < pattern.length; ++i) {
    if (pattern[i] === '+') regexPtn += '[a-z]';
    if (pattern[i] === '$') regexPtn += '[1-9]';
    if (pattern[i] === '*') {
      if (pattern[i+1] === "{") {
        regexPtn += '.{' + pattern[i+2] + '}';
      } else {
        regexPtn += '.{3}';
      }
    } 
  }
  return new RegExp("^" + regexPtn + "$").test(word); 
}
   
// keep this function call here 
console.log(Wildcards(readline()));