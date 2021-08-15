function BipartiteMatching(strArr) { 

  const map = new Map();
  strArr.forEach(str => {
      const [left, right] = str.split('->');
      if (map.has(left)) {
          map.get(left).push(right);
      } else {
          map.set(left, [right]);
      }
  });

  let queue = [[]];
  for (let key of map.keys()) {
      const nextQueue = [];

      const children = map.get(key);
      for (let child of children) {
          queue.forEach(list => {
              const copy = list.slice();
              copy.push(child);
              nextQueue.push(copy);
          });
      }

      queue = nextQueue;
  }
  const matches = queue.map(list => {
      const s = new Set(list);
      return s.size;
  });

  return Math.max(...matches);

}
 
// keep this function call here 
console.log(BipartiteMatching(readline()));









































function BipartiteMatching(strArr) { 

  const map = new Map();
  strArr.forEach(str => {
      const [left, right] = str.split('->');
      if (map.has(left)) {
          map.get(left).push(right);
      } else {
          map.set(left, [right]);
      }
  });

  let queue = [[]];
  for (let key of map.keys()) {
      const nextQueue = [];

      const children = map.get(key);
      for (let child of children) {
          queue.forEach(list => {
              const copy = list.slice();
              copy.push(child);
              nextQueue.push(copy);
          });
      }

      queue = nextQueue;
  }
  const matches = queue.map(list => {
      const s = new Set(list);
      return s.size;
  });

  return Math.max(...matches);

}
 
// keep this function call here 
console.log(BipartiteMatching(readline()));









































function BipartiteMatching(strArr) { 

  const map = new Map();
  strArr.forEach(str => {
      const [left, right] = str.split('->');
      if (map.has(left)) {
          map.get(left).push(right);
      } else {
          map.set(left, [right]);
      }
  });

  let queue = [[]];
  for (let key of map.keys()) {
      const nextQueue = [];

      const children = map.get(key);
      for (let child of children) {
          queue.forEach(list => {
              const copy = list.slice();
              copy.push(child);
              nextQueue.push(copy);
          });
      }

      queue = nextQueue;
  }
  const matches = queue.map(list => {
      const s = new Set(list);
      return s.size;
  });

  return Math.max(...matches);

}
 
// keep this function call here 
console.log(BipartiteMatching(readline()));