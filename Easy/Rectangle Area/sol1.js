function RectangleArea(strArr) { 

  var coords = strArr.join(" ").replace(/[()]/g, "").split(" ");
    
    return (Math.max(coords[0], coords[2], coords[4]) - Math.min(coords[0], coords[2], coords[4])) * 
           (Math.max(coords[1], coords[3], coords[5]) - Math.min(coords[1], coords[3], coords[5]));
}

   
// keep this function call here 
RectangleArea(readline());