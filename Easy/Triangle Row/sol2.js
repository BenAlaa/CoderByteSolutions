function TriangleRow(num) { 

  // too easy
  //return Math.pow(2, num)
  
  previousRow = [1]
  
  for (i = 0; i < num; i++) {
    
    var currentRow = [], len = previousRow.length
    
    currentRow[0] = 1
    currentRow[len] = 1
    
    for (i = 0; i < len -1; i++) 
      currentRow[i + 1] = previousRow[i] + previousRow[i + 1]
      
    previousRow = currentRow
  }
  return previousRow.reduce((a, b) => a + b)
}
   
// keep this function call here 
TriangleRow(readline());