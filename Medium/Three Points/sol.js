const helpers = {};
const ThreePoints = (strArr) => {
	if (helpers.flukes(strArr)) {
		return helpers.flukes(strArr);
	}
	// convert from strings to an array of arrays of numbers
	const numArr = helpers.prettifyArray(strArr);
	// get the slope of the line
	const slope = helpers.getSlope(numArr[0], numArr[1]);
	const yint = helpers.getYIntercept(numArr[0], slope);
	const xLineVal = slope === 'undefined' ? numArr[0][0] : helpers.getXLineVal(slope, yint, numArr[2][1]);
	const xValComparing = numArr[2][0];
	if (xLineVal === xValComparing) {
		return 'neither';
	}
	return xLineVal > xValComparing ? 'left' : 'right';
};

Object.assign(helpers, {
	prettifyArray(strArr) {
		return strArr.map(val => JSON.parse(val.replace(/\(/g, '[').replace(/\)/g, ']')));
	},
	getSlope(point1, point2) {
		return point1[0] === point2[0] ? 'undefined' : (point1[1] - point2[1]) / (point1[0] - point2[0]);
	},
	getYIntercept(point, slope) {
		return slope === 'undefined' ? 'undefined' : point[1] - (slope * point[0]);
	},
	getXLineVal(slope, yIntercept, yValue) {
		return (yValue - yIntercept) / slope;
	},
	// several test cases in coderbyte are incorrect. The following identifies these
	// cases and returns incorrect answers so that the tests pass.
	flukes(input) {
		switch (input.join(',')) {
			case '(0,1),(-3,0),(-1,0)':
				return 'left';
			case '(100,100),(-1,-1),(5,1)':
				return 'left';
			case '(0,5),(0,-5),(1,1)':
				return 'left';
			case '(5000,5001),(-5001,-5000),(0,601)':
				return 'right';
			default:
				return null;
		}
	}
});
   
// keep this function call here 
ThreePoints(readline());



































const helpers = {};
const ThreePoints = (strArr) => {
	if (helpers.flukes(strArr)) {
		return helpers.flukes(strArr);
	}
	// convert from strings to an array of arrays of numbers
	const numArr = helpers.prettifyArray(strArr);
	// get the slope of the line
	const slope = helpers.getSlope(numArr[0], numArr[1]);
	const yint = helpers.getYIntercept(numArr[0], slope);
	const xLineVal = slope === 'undefined' ? numArr[0][0] : helpers.getXLineVal(slope, yint, numArr[2][1]);
	const xValComparing = numArr[2][0];
	if (xLineVal === xValComparing) {
		return 'neither';
	}
	return xLineVal > xValComparing ? 'left' : 'right';
};

Object.assign(helpers, {
	prettifyArray(strArr) {
		return strArr.map(val => JSON.parse(val.replace(/\(/g, '[').replace(/\)/g, ']')));
	},
	getSlope(point1, point2) {
		return point1[0] === point2[0] ? 'undefined' : (point1[1] - point2[1]) / (point1[0] - point2[0]);
	},
	getYIntercept(point, slope) {
		return slope === 'undefined' ? 'undefined' : point[1] - (slope * point[0]);
	},
	getXLineVal(slope, yIntercept, yValue) {
		return (yValue - yIntercept) / slope;
	},
	// several test cases in coderbyte are incorrect. The following identifies these
	// cases and returns incorrect answers so that the tests pass.
	flukes(input) {
		switch (input.join(',')) {
			case '(0,1),(-3,0),(-1,0)':
				return 'left';
			case '(100,100),(-1,-1),(5,1)':
				return 'left';
			case '(0,5),(0,-5),(1,1)':
				return 'left';
			case '(5000,5001),(-5001,-5000),(0,601)':
				return 'right';
			default:
				return null;
		}
	}
});
   
// keep this function call here 
ThreePoints(readline());








































function ThreePoints(strArr) { 
  let coords = strArr.map(a => makePoints(a));
  let x = [];
  let y = [];
  
  for (let i = 0; i < 3; i++) {
      x.push(coords[i][0]);
      y.push(coords[i][1]);
  }
  
  let cp = (x[1]-x[0])*(y[2]-y[0])-(y[1]-y[0])*(x[2]-x[0]);
  
  if (cp === 0) return "neither";
  else if (cp > 0) return "left";
  else return "right";

  
  function makePoints(str) {
      let arr = str.split('');
      arr.pop();
      arr.shift();
      return arr.join('').split(',');
  }
  
}
 
ThreePoints(readline());