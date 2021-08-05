function BinarySearchTreeLCA(strArr) { 
  const numArr = strArr.map(item => {return JSON.parse(item)})
  const arr = numArr[0]
  const max = Math.max(numArr[1], numArr[2])
  const min = Math.min(numArr[1], numArr[2])
  
  let LCA = min
  for (i = arr.indexOf(min); i >= 0; i--) {
    if (min <= arr[i] && arr[i] <= max) {
      LCA = arr[i]
    }
  }
  return LCA
}
   
// keep this function call here 
BinarySearchTreeLCA(readline());




























function BinarySearchTreeLCA(strArr) { 

  const preorderNodes = JSON.parse(strArr.shift());
      const searchNodes = strArr.map(Number);
  
      const tree = new Tree();
  
      preorderNodes.forEach(number => {
          tree.insert(number);
      });
  
      const path0 = tree.path(searchNodes[0]);
      const path1 = tree.path(searchNodes[1]);
  
  
      for (let i = path0.length - 1; i >= 0; i--) {
          if (path1.includes(path0[i])) {
              return path0[i];
          }
      }
  
      return null;
  }
  
  function Tree() {
      this.root = null;
  }
  
  Tree.Node = function(key, left = null, right = null) {
      this.key = key;
      this.left = left;
      this.right = right;
  };
  
  Tree.prototype.insert = function(key, nodePtr = null) {
      if (!this.root) {
          this.root = new Tree.Node(key);
          return;
      }
  
      if (!nodePtr) {
          this.insert(key, this.root);
          return;
      }
  
      if (key < nodePtr.key) {
          if (nodePtr.left === null) {
              nodePtr.left = new Tree.Node(key);
          } else {
              this.insert(key, nodePtr.left);
          }
      } else {
          if (nodePtr.right === null) {
              nodePtr.right = new Tree.Node(key);
          } else {
              this.insert(key, nodePtr.right);
          }
      }
  };
  
  Tree.prototype.keyExists = function(key, nodePtr = null) {
      if (!this.root) {
          return false;
      }
  
      if (!nodePtr) {
          return this.keyExists(key, this.root);
      }
  
      if (key === nodePtr.key) {
          return true;
      }
  
      if (key < nodePtr.key) {
          if (nodePtr.left === null) {
              return false;
          } else {
              return this.keyExists(key, nodePtr.left);
          }
      } else {
          if (nodePtr.right === null) {
              return false;
          } else {
              return this.keyExists(key, nodePtr.right);
          }
      }
  };
  
  // Returns array showing path to node, or [] if node does not exist
  Tree.prototype.path = function(key, nodePtr = null, history = []) {
      if (!this.root) {
          return [];
      }
  
      if (!nodePtr) {
          return this.path(key, this.root, history);
      }
  
      if (key === nodePtr.key) {
          history.push(key);
          return history;
      }
  
      if (key < nodePtr.key) {
          if (nodePtr.left === null) {
              return [];
          } else {
              history.push(nodePtr.key);
              return this.path(key, nodePtr.left, history);
          }
      } else {
          if (nodePtr.right === null) {
              return [];
          } else {
              history.push(nodePtr.key);
              return this.path(key, nodePtr.right, history);
          }
      }
  };
     
  // keep this function call here 
  BinarySearchTreeLCA(readline());