function RectangleArea(strArr){
  let subArr = strArr.map(cord => {
    return cord.replace(/[{()}]/g, '').split(' ');
  });
  
  let point1 = subArr[0].map(n => parseInt(n))
  let point2 = subArr[1].map(n => parseInt(n))
  let point3 = subArr[2].map(n => parseInt(n))
  let point4 = subArr[3].map(n => parseInt(n))
  console.log(point1, point2, point3, point4)
  
  let xCords = [point1[0], point2[0], point3[0], point4[0]]
  let yCords = [point1[1], point2[1], point3[1], point4[1]]
  
  let width = (Math.max(...xCords) - Math.min(...xCords))
  let height = (Math.max(...yCords) - Math.min(...yCords))
  
  return width * height; 
}
   
// keep this function call here 
RectangleArea(readline());