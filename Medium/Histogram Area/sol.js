function HistogramArea(arr) {
    
  let s = []; // our stack
  let maxArea = 0;
  let tp; // top of the stack position
  let areaWithTop; // area with top bar as the smallest bar
  
  let i = 0;
  while (i < arr.length) { 
      // If this bar is higher than the bar on top stack, push it to stack 
      if (s.length === 0 || arr[s[s.length-1]] <= arr[i]) {
          s.push(i++);
      }
      // If this bar is lower than top of stack, then calculate area of rectangle  
      // with stack top as the smallest (or minimum height) bar where "i" is right index
      // for the top and element before top in stack is the left index
      else {
          tp = s[s.length-1];
          s.pop();
          // Calculate the area with arr[tp] stack as smallest bar 
          areaWithTop = arr[tp] * (s.length === 0 ? i : i - s[s.length-1] - 1);
          // update max area, if needed
          if (maxArea < areaWithTop) maxArea = areaWithTop;
      }
  }
  // Now we pop the remaining bars from stack and calculate area with every popped bar as the smallest bar
  while (s.length > 0) {
      tp = s[s.length-1];
      s.pop();
      areaWithTop = arr[tp] * (s.length === 0 ? i : i - s[s.length-1] - 1); 
      if (maxArea < areaWithTop) maxArea = areaWithTop;
  }
  return maxArea;
}
 
// keep this function call here 
HistogramArea(readline());







































function HistogramArea(bars) { 
  let maxArea = 0
  
  // Iterate through bars from left to right
  for(var i = 0; i < bars.length; i++) {
      let bar = bars[i]
      
      maxArea = Math.max(maxArea, bar)
      
      
      // Iterate backwards and find possible largest area
      for(var j = i - 1; j >= 0; j--) {
         const width = i - j + 1
          
         bar = Math.min(bar, bars[j])
         
         maxArea = Math.max(maxArea, bar * width)
      }
  }
  
  // Return largest area
  return maxArea
         
}
   
// keep this function call here 
HistogramArea(readline());




































function HistogramArea(arr) { 

  var max = 0, rows = []; // Row segments
	for (var i = 0; i < arr.length; ++i) {
		var height = arr[i];
		// Increase length of all row segments
		for (let j = 0; j < height; ++j) {
			if (!rows[j]) rows[j] = 0;
			++rows[j]; // Increase length of current row segment
			max = Math.max(max,
					rows[j] * (j + 1));
		}
		for (let j = rows.length - 1; j > height - 1; --j)
			rows[j] = 0;
// 		console.log("Row segments at index:", i, "=", rows);
	}
	return max;
         
}
   
// keep this function call here 
HistogramArea(readline());
































function HistogramArea(arr) {
  var maxArea = 0
  
  for (var i = 0; i < arr.length; i++) {
      var height = arr[i] 
      maxArea = Math.max(maxArea, height)
      
      for (var j = i; j >= 0; j--) {
        var width = i - j + 1   
        var height = Math.min(height, arr[j])
        maxArea = Math.max(maxArea, width * height)
      }
  }
  // code goes here  
  return maxArea; 
         
}
   
// keep this function call here 
HistogramArea(readline());

