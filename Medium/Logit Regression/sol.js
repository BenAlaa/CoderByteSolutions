function format(number, pts) {
  let arr = number.toFixed(pts).split("");
  while (true) {
    if (arr[arr.length - 1] === "0" && arr[arr.length - 2] !== ".") {
      arr.pop();
    } else {
      break;
    }
  }
  return arr.join("");
}

function LogitRegression(arr) { 

  const [x, y, a, b] = arr;
  
  const predY = 1 / (1 + Math.pow(Math.E, (-a * x) - b));

  const difY = predY - y;
  const difX = x * difY;

  const newX = format(a + difX, 3);
  const newY = format(b + difY, 3);

  return `${newX}, ${newY}`; 

}
   
// keep this function call here 
console.log(LogitRegression(readline()));

































function format(number, pts) {
  let arr = number.toFixed(pts).split("");
  while (true) {
    if (arr[arr.length - 1] === "0" && arr[arr.length - 2] !== ".") {
      arr.pop();
    } else {
      break;
    }
  }
  return arr.join("");
}

function LogitRegression(arr) { 

  const [x, y, a, b] = arr;
  
  const predY = 1 / (1 + Math.pow(Math.E, (-a * x) - b));

  const difY = predY - y;
  const difX = x * difY;

  const newX = format(a + difX, 3);
  const newY = format(b + difY, 3);

  return `${newX}, ${newY}`; 

}
   
// keep this function call here 
console.log(LogitRegression(readline()));







































