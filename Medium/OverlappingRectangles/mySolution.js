function OverlappingRectangles(strArr) { 
  const pointsArr = strArr[0].split('),').map(strPoint => {
    return strPoint.replace('(','').replace(')','').split(',').map(char => Number(char))
  });
  const rect1 = pointsArr.slice(0,4);
  const rect2 = pointsArr.slice(4, pointsArr.length)
  const {
    minX: minX1,
    maxX: maxX1,
    minY: minY1,
    maxY: maxY1
  } = findMinMaxOfRect(rect1);
    const {
    minX: minX2,
    maxX: maxX2,
    minY: minY2,
    maxY: maxY2
  } = findMinMaxOfRect(rect2);
  const area1 = Math.abs(minX1-maxX1) * Math.abs(minY1-maxY1)
  const overLapX = calculateOverlappingBetweenTwoSids(minX1, maxX1, minX2, maxX2);
  const overLapY = calculateOverlappingBetweenTwoSids(minY1, maxY1, minY2, maxY2);
  const overlappedArea = overLapX * overLapY;
  const overlappedAreaFitsArea1 = overlappedArea? Math.floor(area1/ overlappedArea) : 0;
  console.log({
    pointsArr,
    rect1,
    rect2,
    minX1,
    maxX1,
    minY1,
    maxY1,
    minX2,
    maxX2,
    minY2,
    maxY2,
    area1,
    overLapX,
    overLapY,
    overlappedArea,
    overlappedAreaFitsArea1
  });
  // code goes here  
  return overlappedAreaFitsArea1; 

}

const findMinMaxOfRect = (rectPointArr) => {
  let minX =rectPointArr[0][0], maxX=rectPointArr[0][0], minY=rectPointArr[0][1], maxY=rectPointArr[0][1];
  rectPointArr.forEach(point => {
    if(point[0] > maxX) maxX = point[0];
    if(point[0] < minX) minX = point[0];
    if(point[1] > maxY) maxY = point[1];
    if(point[1] < minY) minY = point[1];
  })
  return({minX, maxX, minY, maxY})
}

const calculateOverlappingBetweenTwoSids = (min1, max1, min2, max2) => {
  let overLap = 0;
  if(min2 >= max1 || max2 <= min1 ) return overLap;
  else if(min2 >= min1 && min2 <= max1 && max2 >= max1) overLap = Math.abs(min2-max1);
  else if(min2 >= min1 && min2 <= max1 && max2 <= max1) overlap = Math.abs(min2-max2);
  else if(max2 >= min1 && max2 <= max1 && min2 <= min1) overLap = Math.abs(min1-max2);
  else if(max2 >= min1 && max2 <= max1 && min2 >= min1) overLap = Math.abs(min2-max2);
  return overLap;
}
   
// keep this function call here 
console.log(OverlappingRectangles(readline()));