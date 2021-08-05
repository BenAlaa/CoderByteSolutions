function TreeConstructorTwo(strArr) { 
  const parents ={}
  const children = {}
  for( var i = 0; i< strArr.length; i++){
    const [child, parent] = strArr[i].replace(/[()]/g, '').split(',')
    if(parent === child) return false
    const exist = parents[parent]
    if(exist){
      parents[parent] = [...exist,child ]
      if(parents[parent].length >2 ) return false
    } else {
      parents[parent] = [child]
    }
    const childExist = children[child]
    if(childExist) 
    {
      return false
    }
    children[child] = parent
  }


  return true
}
   
// keep this function call here 
console.log(TreeConstructorTwo(readline()));




































function TreeConstructorTwo(strArr) { 

  // code goes here  
   if(strArr.length === 0) return true
  let array = strArr.map(item => item.slice(1, item.length - 1).split(',').map(num => +num))
  let nodeArray = []
  class Node {
    constructor(value) {
      this.value = value
      this.parent = null
      this.left = null
      this.right = null
    }
  }
  for (let i = 0; i < array.length; i++) {
    let node = nodeArray.filter(item => item.value === array[i][0])[0]
    if (!node) {
      node = new Node(array[i][0])
      nodeArray.push(node)
    }
    if (node.parent) return false
    let parent = nodeArray.filter(item => item.value === array[i][1])[0]
    if (!parent) {
      parent = new Node(array[i][1])
      nodeArray.push(parent)
    }
    let parentTest = parent
    while (parentTest) {
      if (parentTest.value === node.value) return false
      parentTest = parentTest.parent
    }
    if (parent.left && parent.right) return false
    else if (!parent.left) {
      node.parent = parent
      parent.left = node
    }
    else if (!parent.right) {
      node.parent = parent
      parent.right = node
    }

  }
  let parentCounter = 0
  // console.log(nodeArray)
  for (let i = 0; i < nodeArray.length; i++) {
    if (nodeArray[i].parent === null) parentCounter++
  }
  if (parentCounter !== 1) return false
  return true;
}
   
// keep this function call here 
console.log(TreeConstructorTwo(readline()));











































function TreeConstructorTwo(strArr) { 

  if(strArr.length === 0) return true
  let array = strArr.map(item => item.slice(1, item.length - 1).split(',').map(num => +num))
  let nodeArray = []
  class Node {
    constructor(value) {
      this.value = value
      this.parent = null
      this.left = null
      this.right = null
    }
  }
  for (let i = 0; i < array.length; i++) {
    let node = nodeArray.filter(item => item.value === array[i][0])[0]
    if (!node) {
      node = new Node(array[i][0])
      nodeArray.push(node)
    }
    if (node.parent) return false
    let parent = nodeArray.filter(item => item.value === array[i][1])[0]
    if (!parent) {
      parent = new Node(array[i][1])
      nodeArray.push(parent)
    }
    let parentTest = parent
    while (parentTest) {
      if (parentTest.value === node.value) return false
      parentTest = parentTest.parent
    }
    if (parent.left && parent.right) return false
    else if (!parent.left) {
      node.parent = parent
      parent.left = node
    }
    else if (!parent.right) {
      node.parent = parent
      parent.right = node
    }

  }
  let parentCounter = 0
  // console.log(nodeArray)
  for (let i = 0; i < nodeArray.length; i++) {
    if (nodeArray[i].parent === null) parentCounter++
  }
  if (parentCounter !== 1) return false
  return true

}
   
// keep this function call here 
console.log(TreeConstructorTwo(readline()));




