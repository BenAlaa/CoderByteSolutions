children = {}
function MaxHeapChecker(arr) { 
  findChilds(arr[0], 0, arr);
  output = []
  for(parent in children){
    if(children[parent][0] && children[parent][0] > parent){
      output.push(children[parent][0]);
    }
    if(children[parent][1] && children[parent][1] > parent){
      output.push(children[parent][1])
    }
  }
  return  output.length > 0 ? output.join() : "max";
}

function findChilds(num, index, arr){
  if(!arr[index + 1]){
    return;
  }
  if(!arr[index + 2]){
    children[num] = [arr[index + 1]];
    return;
  }
  children[num] = [arr[index + 1], arr[index + 2]];
  index += 2;
  findChilds(arr[arr.indexOf(num) + 1], index, arr);
}
   
// keep this function call here 
console.log(MaxHeapChecker(readline()));







































function MaxHeapChecker(arr) { 
  let nonconformingNodes = [];
  for (let i = 0; i < arr.length; ++i) {
    let parent = arr[i];
    let leftChild = arr[(2 * i) + 1];
    let rightChild = arr[(2 * i) + 2];
    if (parent < leftChild) {
      nonconformingNodes.push(leftChild);
    }
    if (parent < rightChild) {
      nonconformingNodes.push(rightChild);
    }
  }
  return nonconformingNodes.length > 0 ? nonconformingNodes.join(",") : "max"; 

}
   
// keep this function call here 
console.log(MaxHeapChecker(readline()));
































function MaxHeapChecker(arr) { 
  let results = [];
  arr.unshift(null);
  for(let i=1; i<arr.length;i++){
    let left = 2 *i;
    let right = 2*i +1;
    if(arr[left] != undefined && arr[left] > arr[i]){
      results.push(arr[left]);
    }
    if(arr[right] != undefined && arr[right] > arr[i]){
      results.push(arr[right]);
    }
  }

  // code goes here  
  return results.length ? results.join(",") : "max"; 

}
   
// keep this function call here 
console.log(MaxHeapChecker(readline()));