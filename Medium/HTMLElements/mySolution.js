function HTMLElements(str) { 

  // code goes here  
  let tagsStack = [];
  let tags = str.split(">").map(e => e.replace(/.*</,''));
  tags.pop();
  
  for (var index = 0; index < tags.length; index++) {
      if (tags[index].charAt(0) === '/') {
          if (tags[index].slice(1) === tagsStack[tagsStack.length-1]) {
              tagsStack.pop();
          } else {
              return tagsStack[tagsStack.length-1];
          }
      } else {
          tagsStack.push(tags[index]);
      }
  }
  
  return tagsStack.length ? tagsStack[0]: "true";
         
}
   
// keep this function call here 
HTMLElements(readline());