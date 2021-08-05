function BinaryTreeLCA(strArr) { 
  let arr = strArr[0].replace(/[\[\]\s]/g, '').split(',');
  let obj = {}, counter = 0, length = 1;

  while(arr.length) {
      let val = arr.splice(0,length)
      obj[counter] = val;
      counter ++;
      length = Math.pow(2, counter);
  }


  let lcas1 = findAncestors(findValueData(strArr[1]));
  let lcas2 = findAncestors(findValueData(strArr[2]));
  let test1 = (lcas1.find(item => item === strArr[1]) && lcas2.find(item => item === strArr[1])) || lcas1.find(item => item === strArr[2]) && lcas2.find(item => item === strArr[2]) 
  let common = lcas1.filter(item => lcas2.includes(item)).sort( (a,b) => a - b)[0]
  return test1 || common;
  function findValueData(val) {
      for (let row in obj) {
          let index = obj[row].indexOf(val);
          if (index !== -1) {
              return [row, index]
          }
      }
  }
  function findAncestors(arr) {
     let returnArr = [obj[arr[0]][arr[1]]]
     while(+arr[0] >0) {
          let row = +arr[0]-1;
          let col = Math.floor(arr[1] / 2)
          returnArr.push(obj[row][col])
          arr = [row.toString(), col]
      }
      return returnArr;
  }
}
 
// keep this function call here 
console.log(BinaryTreeLCA(readline()));










































function BinaryTreeLCA(strArr) { 

  // code goes here  
   let tree = strArr[0];
  let valA = strArr[1];
  let valB = strArr[2];

  // Convert string to array
  let treePlain = tree.replace('[', '');
  treePlain = treePlain.replace(']', '');
  let treeArr = treePlain.split(", ");

  // Separate array in diffrent levels
  let current_level = 0;
  let prev_level = -1;
  let level = [];
  let levels = [];
  for (i=0; i<treeArr.length; i++) {
    let node = treeArr[i];
    level.push(node);
    // Check level
    current_level = Math.floor(Math.log2(i+2));
    if (current_level != prev_level) {
      levels.push(level);
      prev_level = current_level;
      // Create new level
      level = [];
    }
  }

  // Get ancestors
  let ancA = findAncestors(valA, treeArr, levels);
  let ancB = findAncestors(valB, treeArr, levels);

  //Get LCA
  let lca = findLowestCommon(ancA, ancB);
  
  return lca; 
}

function findLowestCommon(ancA, ancB) {
  let found = false;
  let lca = -1;
  for (i=0; i<ancA.length; i++) {
    for (j=0; j<ancB.length; j++) {
      if (ancA[i] == ancB[j] && !found) {
        found = true;
        lca = ancA[i];
      }
    }
  }
  return lca;
}

function findAncestors(nodeValue, treeArr, levels) {
  // Find in what level this node belongs
  let valBPos = treeArr.indexOf(nodeValue);
  let levelB = Math.floor(Math.log2(valBPos+1));
  
  let ancestors = [];
  //Go to that level and find position in that level
  let local_level = levels[levelB];
  let localPos = local_level.indexOf(nodeValue);
  ancestors.push(nodeValue);

  for (j=(levelB-1); j >= 0; j--) {
    local_level = levels[j];
    localPos = Math.floor(localPos/2);
    let ancestor = local_level[localPos];
    ancestors.push(ancestor);
  }
  return ancestors;

}
   
// keep this function call here 
console.log(BinaryTreeLCA(readline()));











































function BinaryTreeLCA(strArr) { 

  let tree = strArr[0];
  let valA = strArr[1];
  let valB = strArr[2];

  // Convert string to array
  let treePlain = tree.replace('[', '');
  treePlain = treePlain.replace(']', '');
  let treeArr = treePlain.split(", ");

  // Separate array in diffrent levels
  let current_level = 0;
  let prev_level = -1;
  let level = [];
  let levels = [];
  for (i=0; i<treeArr.length; i++) {
    let node = treeArr[i];
    level.push(node);
    // Check level
    current_level = Math.floor(Math.log2(i+2));
    if (current_level != prev_level) {
      levels.push(level);
      prev_level = current_level;
      // Create new level
      level = [];
    }
  }

  // Get ancestors
  let ancA = findAncestors(valA, treeArr, levels);
  let ancB = findAncestors(valB, treeArr, levels);

  //Get LCA
  let lca = findLowestCommon(ancA, ancB);
  
  return lca; 
}

function findLowestCommon(ancA, ancB) {
  let found = false;
  let lca = -1;
  for (i=0; i<ancA.length; i++) {
    for (j=0; j<ancB.length; j++) {
      if (ancA[i] == ancB[j] && !found) {
        found = true;
        lca = ancA[i];
      }
    }
  }
  return lca;
}

function findAncestors(nodeValue, treeArr, levels) {
  // Find in what level this node belongs
  let valBPos = treeArr.indexOf(nodeValue);
  let levelB = Math.floor(Math.log2(valBPos+1));
  
  let ancestors = [];
  //Go to that level and find position in that level
  let local_level = levels[levelB];
  let localPos = local_level.indexOf(nodeValue);
  ancestors.push(nodeValue);

  for (j=(levelB-1); j >= 0; j--) {
    local_level = levels[j];
    localPos = Math.floor(localPos/2);
    let ancestor = local_level[localPos];
    ancestors.push(ancestor);
  }
  return ancestors;
}
   
// keep this function call here 
console.log(BinaryTreeLCA(readline()));






































function BinaryTreeLCA(strArr) { 

  // code goes here  
  let array = strArr[0].slice(1, strArr[0].length - 1).split(',').map(num => +num)
  let node1 = array.indexOf(+strArr[1])
  let node2 = array.indexOf(+strArr[2])
  let node1Path = buildPath(node1)
  let node2Path = buildPath(node2)
  function buildPath(index) {
    let path = []
    path.push(array[index])
    while (index > 0) {
      index = Math.floor((index - 1) / 2)
      path.push(array[index])
    }
    return path
  }
  for (let i = 0; i < node1Path.length; i++) {
    for (let j = 0; j < node2Path.length; j++) {
      if(node1Path[i]===node2Path[j]) return node1Path[i]
    }
  }
}
   
// keep this function call here 
console.log(BinaryTreeLCA(readline()));