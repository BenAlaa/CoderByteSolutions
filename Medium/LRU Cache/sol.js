function LRUCache(strArr) { 

  let cache = [];
  for(let i = 0; i < strArr.length; i++) {
      if(cache.includes(strArr[i])) {
          let index = cache.indexOf(strArr[i]);
          cache.splice(index, 1);
      }
      cache.push(strArr[i]);
  }
  while(cache.length > 5) {
      cache.shift();
  }
  return cache.join("-");
}
 
// keep this function call here 
LRUCache(readline());























function LRUCache(strArr) { 
  const cache = new Cache(5);
  strArr.forEach((el) => {
    cache.retreive(el);
  })
  return cache.getCache();
}

function Cache(size) {
  const maxSize = size;
  const cache = [];
  return {
    retreive(el) {
      let index = cache.indexOf(el);
      if (index !== -1) {
        cache.splice(index, 1);
        cache.push(el);
      } else {
        cache.push(el)
      }
      
      if (cache.length > maxSize) {
        cache.shift();
      }
    },
    getCache() {
      return cache.join('-');
    }
  }
}
   
// keep this function call here 


































function LRUCache(strArr) {
  const cache = new Set()
  for (let char of strArr) {
    if (cache.has(char)) {
      cache.delete(char)
      cache.add(char)
    } else {
      cache.add(char)
    }
  }
  const outputArr = [...cache];
  cache.clear();
  return outputArr.length > 5
    ? outputArr.slice(outputArr.length - 5, outputArr.length).join('-')
    : outputArr.join('-'); 
}
   
// keep this function call here 
LRUCache(readline());






























function LRUCache(input) { 

  var results = [];
  
  for (var i = 0; i < input.length; i++) {
      if (results.includes(input[i]) === false) {
          results.push(input[i]);
      }
      else {
          results.splice(results.indexOf(input[i]), 1);
          results.push(input[i]);
      }
      if (results.length > 5) {
        results.shift();
      }
  }
    return results.join("-"); 
}
   
// keep this function call here 
LRUCache(readline());
