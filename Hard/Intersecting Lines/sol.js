function IntersectingLines(strArr) {
  var xOne = parseInt(strArr[0].match(/(-?[0-9]+),/)[1]),
      xTwo = parseInt(strArr[1].match(/(-?[0-9]+),/)[1]),
      xThree = parseInt(strArr[2].match(/(-?[0-9]+),/)[1]),
      xFour = parseInt(strArr[3].match(/(-?[0-9]+),/)[1]),
      yOne = parseInt(strArr[0].match(/,(-?[0-9]+)/)[1]),
      yTwo = parseInt(strArr[1].match(/,(-?[0-9]+)/)[1]),
      yThree = parseInt(strArr[2].match(/,(-?[0-9]+)/)[1]),
      yFour = parseInt(strArr[3].match(/,(-?[0-9]+)/)[1]),
      denominator = (xOne - xTwo) * (yThree - yFour) - (yOne - yTwo) * (xThree - xFour),
      xNominator = ((xOne * yTwo - yOne * xTwo) * (xThree - xFour)) - (xOne - xTwo) * (xThree * yFour - yThree * xFour),
      yNominator = ((xOne * yTwo - yOne * xTwo) * (yThree - yFour)) - (yOne - yTwo) * (xThree * yFour - yThree * xFour),
      i,
      biggestX,
      biggestY,
      x,
      y;
  for (i = 1; i < Math.abs(denominator); i += 1) {
      if (Math.abs(xNominator) % i === 0 && Math.abs(denominator) % i === 0) {
          biggestX = i;
      }
  }
  for (i = 1; i < Math.abs(denominator); i += 1) {
      if (Math.abs(yNominator) % i === 0 && Math.abs(denominator) % i === 0) {
          biggestY = i;
      }
  }
  if (denominator < 0) {
      denominator *= -1;
      xNominator *= -1;
      yNominator *= -1;
  }
  x = xNominator % denominator === 0 ? xNominator / denominator : xNominator / biggestX + '/' + denominator / biggestX;
  y = yNominator % denominator === 0 ? yNominator / denominator : yNominator / biggestY + '/' + denominator / biggestY;

  return denominator === 0 ? "no intersection" : '(' + [x, y].join(',') + ')';
}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
IntersectingLines(readline());











































function IntersectingLines(strArr) { 
  function simplifyMe(xiN,xiD){
    for(i=2; i<=Math.floor(Math.min(Math.abs(xiD),Math.abs(xiN))); i++){
      while(xiD%i == 0 && xiN%i == 0){
        xiD /= i;
        xiN /= i;
      }  
    }
    return {0: xiN, 1: xiD}
  }
  
  var x = [],
      y = [];
  
  for (var i=0; i<strArr.length; i++){
    x.push(Number(strArr[i].split(',')[0].slice(1)));
    y.push(Number(strArr[i].split(',')[1].slice(0,-1)));
  }
  
  var m0N = y[1]-y[0];
  var m0D = x[1]-x[0];
  var m1N = y[3]-y[2];
  var m1D = x[3]-x[2];
  
  
  if (m0N/m0D === m1N/m1D) return "no intersection";
  
  var a = simplifyMe(m0N,m0D);
  m0N = a[0];
  m0D = a[1];
  var a = simplifyMe(m1N,m1D);
  m1N = a[0];
  m1D = a[1];
  
  // c0 = y[0] - m0N/m0D*x[0];
  var a = simplifyMe(y[0]*m0D-m0N*x[0], m0D);
  var c0N = a[0];
  var c0D = a[1];
  
  // c1 = y[2] - m1N/m1D*x[2];
  var a = simplifyMe(y[2]*m1D-m1N*x[2], m1D);
  var c1N = a[0];
  var c1D = a[1];
  
  // var xiN = c1-c0;
  // var xiD = m0-m1;
  
  if(m0D === 0 && m1D != 0){
    var xi = x[0];
    var yi = m1N/m1D * xi + c1N/c1D;
    return "(" + xi + "," + yi + ")";
  } else if(m1D === 0 && m0D != 0){
    var xi = x[2];
    var yi = m0N/m0D * xi + c0N/c0D;
    return "(" + xi + "," + yi + ")";
  } else if(m1D === 0 && m0D === 0){
    return "no intersection";
  }
  
  
  
  var xiN = (c1N*c0D-c0N*c1D)*(m0D*m1D);
  var xiD = (m0N*m1D-m1N*m0D)*(c0D*c1D);
  
  
  var negx = '';
  if (xiN/xiD < 0) negx = '-';
  var a = simplifyMe(xiN,xiD);
  xiN = a[0];
  xiD = a[1];
  
  var tag = Math.abs(xiD) != 1 ? '/' + Math.abs(xiD) : '';
  var xi = negx + Math.abs(xiN) + tag;
  
  a = simplifyMe(m0N/m0D*xiN+c0N/c0D*xiD, xiD);
  var yiN = a[0];
  var yiD = a[1];

  var negy = '';
  if (yiN/yiD < 0) negy = '-';
  var tag = Math.abs(yiD) != 1 ? '/' + Math.abs(yiD) : '';
  var yi = negy + Math.abs(yiN) + tag;
  
  return '(' + xi + ',' + yi + ')'; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
IntersectingLines(readline());














































function IntersectingLines(strArr) {

  var points = strArr.map(function (e) {
      return e.match(/-?d+.?d*/g).map(function (f) {
          return f * 1;
      });
  });

  function Line(p1, p2) {
      this.p1 = p1 || [0, 0];
      this.p2 = p2 || [0, 0];
      this.slope = function () {
          var slope = (this.p2[1] - this.p1[1]) / (this.p2[0] - this.p1[0]);
          // remove sign from infinite slopes for ease of calculation
          return Math.abs(slope) === Infinity ? Infinity : slope;
      }
      this.y = function(x) {
          var slope = this.slope();
          return slope*(x - p1[0]) + p1[1];
      }
  }

  function getIntersect(l1, l2) {
      var x, y;
      
      // special case where one line is vertical
      if (Math.abs(l1.slope()) === Infinity) {
          return [l1.p1[0],l2.y(l1.p1[0])];
      } else if (Math.abs(l2.slope()) === Infinity) {
          return [l2.p1[0],l1.y(l2.p1[0])];
      }

      // determine x
      // x = ( mA*xA1 - mB*xB1 + yB1 - yA1 ) / (mA - mB)
      x = (l1.slope() * l1.p1[0] - l2.slope() * l2.p1[0] + l2.p1[1] - l1.p1[1]);
      x /= l1.slope() - l2.slope();

      // use x to determine y
      y = l1.slope() * (x - l1.p1[0]) + l1.p1[1];

      return [x, y];
  }

  function float2rat(n) {
      var tolerance = 1.0E-6;
      var x = Math.abs(n),
          h1 = 1,
          h2 = 0,
          k1 = 0,
          k2 = 1,
          b = x;
      do {
          var a = Math.floor(b),
              aux = h1;
          h1 = a * h1 + h2;
          h2 = aux;
          aux = k1;
          k1 = a * k1 + k2;
          k2 = aux;
          b = 1 / (b - a);
      } while (Math.abs(x - h1 / k1) > x * tolerance);
      return (x !== n ? '-' : '') + h1 + "/" + k1;
  } // ht Joni, modified from https://gist.github.com/joni/

  var l1 = new Line(points[0], points[1]),
      l2 = new Line(points[2], points[3]);
  
  if (l1.slope() === l2.slope()) {
      // lines are parallel; no intersection
      return 'no intersection';
  } else {
      // calculate intersection and format coordinates into a/b form if decimal
      var intersect = getIntersect(l1, l2).map( function(e) {
          return e === Math.floor(e) ? e : float2rat(e);
      });
      return '(' + intersect[0] + ',' + intersect[1] + ')';
  }

}

// Algabreic method
// y = mA(x - xA1) + yA1
// y = mB(x - xB1) + yB1
// mA(x - xA1) + yA1 = mB(x - xB1) + yB1
// mA x - mA*xA1 + yA1 = mB x - mB*xB1 + yB1
// (mA - mB) x = mA*xA1 - mB*xB1 + yB1 - yA1
// x = ( mA*xA1 - mB*xB1 + yB1 - yA1 ) / (mA - mB)
// sub x into either slope-intersect form above to get y
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
IntersectingLines(readline());
