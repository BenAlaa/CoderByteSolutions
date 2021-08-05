function PreorderTraversal(strArr) { 
  const queue = [];

  const helper = (arr, index) => {
    if(index > strArr.length-1) return;
    if(arr[index] === '#') return;

    queue.push(arr[index]);
    helper(arr,2*index+1);
    helper(arr,2*index+2);
  }

  helper(strArr, 0);
  // code goes here  
  return queue.join(' '); 

}
   
// keep this function call here 
console.log(PreorderTraversal(readline()));

























function PreorderTraversal(strArr) { 
  let level = 0;
  let arr = [];
  let count = 0;
  let lastCount = 1/2;
  while(strArr.length !== 0) {
  // console.log(arr);
   for(let i = 1; i <= lastCount * 2; i++) {
   	   let number = strArr.shift();
   	   if(arr[level]) {
   	     arr[level] +=  number + ',' || '';		
   	   } else {
		 arr[level] = number + ',' || '';
   	   }     
   	    count++;
   }
   level++;
   lastCount = count;
   count = 0;
  }
  // console.log(arr);
  return preorder(arr); 
}
   
function preorder(arr) {
  console.log(arr);
	res = [];
	for(let j = 0; j <= arr.length * 2; j++) {
	  for(let i = 0; i < arr.length; i++) {
	   // console.log('the first i is', i);
	  	if(arr[i][0] && arr[i][0] !== "#" && arr[i][0] !== "u") 
	  	res.push(arr[i][0]);
	  	arr[i] = arr[i].replace(/^\d+,|undefined,|#,/,"");	
	  }
	  for(let i = arr.length - 1; i >= 0; i--) {
	   // console.log('the second i is', i)
	  	if(arr[i][0] && arr[i][0] !== "#" && arr[i][0] !== "u") 
	  	res.push(arr[i][0]);
	  	arr[i] = arr[i].replace(/^\d+,|undefined,|#,/,"");
	  }
	}
	return res.join(' ');
}
   
// keep this function call here 
PreorderTraversal(readline());
































function PreorderTraversal(strArr) { 
  //This is needed for any test case that isn't a complete binary heap. It just fills in the gaps with more null symbols.
  if (!complete(strArr)) {
      for (let i = 0; i < strArr.length/2; i++) {
          if (strArr[i] === "#") {
              let rest = strArr.splice(i*2+1);
              strArr = strArr.concat(["#","#"].concat(rest));
          }
      }
  }
  
  let root = fillTree(0);
  let pre = preorder(root, []);
  
  return pre.join(' '); 
  
  function Node(value) {
      this.val = value;
      this.left = null;
      this.right = null;
  }
  
  function fillTree(index) {
      if (index >= strArr.length) return null;
      if (strArr[index] === "#") return null;
      let newNode = new Node(strArr[index]);
      newNode.left = fillTree(index*2+1);
      newNode.right = fillTree(index*2+2);
      return newNode;
  }
  
  function preorder(node, arr) {
      arr.push(node.val);
      if (node && node.left) preorder(node.left, arr);
      if (node && node.right) preorder(node.right, arr);
      return arr;
  }
  
  function complete(sa) {
      let n = sa.length+1;
      while (n > 1) {
          if (n%2 === 1) return false;
          n = n/2;
      }
      return true;
  }
}
 
PreorderTraversal(readline());


























function PreorderTraversal(strArr) {
  return preorder(strArr, 0).join(' ');
}

function preorder(arr, i) {
  let result = [];
  if (arr[i] === undefined || arr[i] === null || i >= arr.length || arr[i] === '#') { return result; }
  result.push(arr[i]);
  result = result.concat(preorder(arr, 2*i+1), preorder(arr, 2*i+2));
  return result;
}
// keep this function call here 
PreorderTraversal(readline());

