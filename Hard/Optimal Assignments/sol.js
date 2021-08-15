function OptimalAssignments(strArr) { 
  const machineCosts = strArr.map(line => line.replace(/^\(|\)$/g, '')).map(line => line.split(/,/).map(i => parseInt(i, 10)));
  let bestMatchCost = Number.MAX_SAFE_INTEGER;
  let bestMatchAssignments = undefined;

  for (var match of generateMatches(machineCosts.map((_, i) => i))) {
      const cost = costMatch(match);
      if (cost < bestMatchCost) {
          bestMatchCost = cost;
          bestMatchAssignments = match.slice(0);
      }
  }

  return bestMatchAssignments.map((t, i) => `(${i+1}-${t+1})`).join('');

  function* generateMatches(items) {
      if (items.length === 1) {
          yield items;
          return;
      }

      for (let match of generateMatches(items.slice(1))) {
          for (let i = 0; i <= match.length; i ++) {
              yield match.slice(0, i).concat([items[0]]).concat(match.slice(i));
          }
      }
  }

  function costMatch(matchAssignment) {
      return matchAssignment
          .reduce((acc, cur, idx) => acc + machineCosts[idx][cur], 0);
  }
}    
 
// keep this function call here 
OptimalAssignments(readline());


































function getAllPerms(s) {
	var perms = [];
	if (s.length === 1) {
		perms.push(s);
	} else {
		for (var i = 0; i < s.length; i++) {
			var sub = s.slice(0);
			sub.splice(i, 1);
			var sp = getAllPerms(sub);
			for (var o = 0; o < sp.length; o++) {
				sp[o].unshift(s[i]);
				perms.push(sp[o]);
			}
		}
	}
	return perms;
}




function OptimalAssignments(strArr) {
    var larr=[], i=0,count=1;
    while (i<strArr.length){
        larr.push(count);
        count++;
        i++;
    }
    var perms = getAllPerms(larr);
    var lowest = 100000, nstr='';
    for(var j=0; j<perms.length;j++){
        var str = '', sum=0;
        for(var k=0; k<strArr.length; k++){
            var arr = strArr[k].match(/d+/g);
            
            str+="(" + (k+1).toString() + "-" + perms[j][k] + ")";
            
            sum+=Number(arr[perms[j][k]-1]);
        }
        if (lowest>sum) {lowest = sum; nstr = str;}
        
    }
    return nstr
}

                    

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OptimalAssignments(readline());




















































function OptimalAssignments(strArr) { 
  var m = [];
  var cols = strArr[0].split(',').length;
  for (var i = 0; i < strArr.length; i += 1) {
    var row = strArr[i].match(/d+/g)
    m.push(row);
  }
  var mr = new Munkres();
  var ind = mr.compute(m);
  var r = [];
  for (i = 0; i < ind.length; ++i) {
    r.push('(' + (ind[i][0]*1+1) + '-' + (ind[i][1]*1+1) + ')');
  }
  return r.join('');
}
var MAX_SIZE = parseInt(Number.MAX_SAFE_INTEGER/2) || ((1 << 26)*(1 << 26));

var DEFAULT_PAD_VALUE = 0;

function Munkres() {
	this.C = null

	this.row_covered = []
	this.col_covered = []
	this.n = 0
	this.Z0_r = 0
	this.Z0_c = 0
	this.marked = null
	this.path = null
}

Munkres.prototype.pad_matrix = function(matrix, pad_value) {
	pad_value = pad_value || DEFAULT_PAD_VALUE;

	var max_columns = 0;
	var total_rows = matrix.length;

	for (var i = 0; i < total_rows; ++i)
		if (matrix[i].length > max_columns)
			max_columns = matrix[i].length;

	total_rows = max_columns > total_rows ? max_columns : total_rows;

	var new_matrix = [];

	for (var i = 0; i < total_rows; ++i) {
		var row = matrix[i] || [];
		var new_row = row.slice();

		// If this row is too short, pad it
		while (total_rows > new_row.length)
			new_row.push(pad_value);

		new_matrix.push(new_row);
	}

	return new_matrix;
};

Munkres.prototype.compute = function(cost_matrix, options) {

	options = options || {};
	options.padValue = options.padValue || DEFAULT_PAD_VALUE;

	this.C = this.pad_matrix(cost_matrix, options.padValue);
	this.n = this.C.length;
	this.original_length = cost_matrix.length;
	this.original_width = cost_matrix[0].length;

	var nfalseArray = []; /* array of n false values */
	while (nfalseArray.length < this.n)
		nfalseArray.push(false);
	this.row_covered = nfalseArray.slice();
	this.col_covered = nfalseArray.slice();
	this.Z0_r = 0;
	this.Z0_c = 0;
	this.path =   this.__make_matrix(this.n * 2, 0);
	this.marked = this.__make_matrix(this.n, 0);

	var step = 1;

	var steps = { 1 : this.__step1,
	              2 : this.__step2,
	              3 : this.__step3,
	              4 : this.__step4,
	              5 : this.__step5,
	              6 : this.__step6 };

	while (true) {
		var func = steps[step];
		if (!func) // done
			break;

		step = func.apply(this);
	}

	var results = [];
	for (var i = 0; i < this.original_length; ++i)
		for (var j = 0; j < this.original_width; ++j)
			if (this.marked[i][j] == 1)
				results.push([i, j]);

	return results;
};

Munkres.prototype.__make_matrix = function(n, val) {
	var matrix = [];
	for (var i = 0; i < n; ++i) {
		matrix[i] = [];
		for (var j = 0; j < n; ++j)
			matrix[i][j] = val;
	}

	return matrix;
};

Munkres.prototype.__step1 = function() {
	for (var i = 0; i < this.n; ++i) {
		// Find the minimum value for this row and subtract that minimum
		// from every element in the row.
		var minval = Math.min.apply(Math, this.C[i]);

		for (var j = 0; j < this.n; ++j)
			this.C[i][j] -= minval;
	}

	return 2;
};

Munkres.prototype.__step2 = function() {
	for (var i = 0; i < this.n; ++i) {
		for (var j = 0; j < this.n; ++j) {
			if (this.C[i][j] == 0 &&
				!this.col_covered[j] &&
				!this.row_covered[i])
			{
				this.marked[i][j] = 1;
				this.col_covered[j] = true;
				this.row_covered[i] = true;
			}
		}
	}

	this.__clear_covers();

	return 3;
};

Munkres.prototype.__step3 = function() {
	var count = 0;

	for (var i = 0; i < this.n; ++i) {
		for (var j = 0; j < this.n; ++j) {
			if (this.marked[i][j] == 1) {
				this.col_covered[j] = true;
				++count;
			}
		}
	}

	return (count >= this.n) ? 7 : 4;
};

Munkres.prototype.__step4 = function() {
	var done = false;
	var row = -1, col = -1, star_col = -1;

	while (!done) {
		var z = this.__find_a_zero();
		row = z[0];
		col = z[1];

		if (row < 0)
			return 6;

		this.marked[row][col] = 2;
		star_col = this.__find_star_in_row(row);
		if (star_col >= 0) {
			col = star_col;
			this.row_covered[row] = true;
			this.col_covered[col] = false;
		} else {
			this.Z0_r = row;
			this.Z0_c = col;
			return 5;
		}
	}
};

Munkres.prototype.__step5 = function() {
	var count = 0;

	this.path[count][0] = this.Z0_r;
	this.path[count][1] = this.Z0_c;
	var done = false;

	while (!done) {
		var row = this.__find_star_in_col(this.path[count][1]);
		if (row >= 0) {
			count++;
			this.path[count][0] = row;
			this.path[count][1] = this.path[count-1][1];
		} else {
			done = true
		}

		if (!done) {
			var col = this.__find_prime_in_row(this.path[count][0]);
			count++;
			this.path[count][0] = this.path[count-1][0];
			this.path[count][1] = col;
		}
	}

	this.__convert_path(this.path, count);
	this.__clear_covers();
	this.__erase_primes();
	return 3;
};

Munkres.prototype.__step6 = function() {
	var minval = this.__find_smallest();

	for (var i = 0; i < this.n; ++i) {
		for (var j = 0; j < this.n; ++j) {
			if (this.row_covered[i])
				this.C[i][j] += minval;
			if (!this.col_covered[j])
				this.C[i][j] -= minval;
		}
	}

	return 4;
};

Munkres.prototype.__find_smallest = function() {
	var minval = MAX_SIZE;

	for (var i = 0; i < this.n; ++i)
		for (var j = 0; j < this.n; ++j)
			if (!this.row_covered[i] && !this.col_covered[j])
				if (minval > this.C[i][j])
					minval = this.C[i][j];

	return minval;
};

Munkres.prototype.__find_a_zero = function() {
	for (var i = 0; i < this.n; ++i)
		for (var j = 0; j < this.n; ++j)
			if (this.C[i][j] == 0 &&
				!this.row_covered[i] &&
				!this.col_covered[j])
				return [i, j];

	return [-1, -1];
};

Munkres.prototype.__find_star_in_row = function(row) {
	for (var j = 0; j < this.n; ++j)
		if (this.marked[row][j] == 1)
			return j;

	return -1;
};

Munkres.prototype.__find_star_in_col = function(col) {
	for (var i = 0; i < this.n; ++i)
		if (this.marked[i][col] == 1)
			return i;

	return -1;
};

Munkres.prototype.__find_prime_in_row = function(row) {
	for (var j = 0; j < this.n; ++j)
		if (this.marked[row][j] == 2)
			return j;

	return -1;
};

Munkres.prototype.__convert_path = function(path, count) {
	for (var i = 0; i <= count; ++i)
		this.marked[path[i][0]][path[i][1]] =
			(this.marked[path[i][0]][path[i][1]] == 1) ? 0 : 1;
};

Munkres.prototype.__clear_covers = function() {
	for (var i = 0; i < this.n; ++i) {
		this.row_covered[i] = false;
		this.col_covered[i] = false;
	}
};

Munkres.prototype.__erase_primes = function() {
	for (var i = 0; i < this.n; ++i)
		for (var j = 0; j < this.n; ++j)
			if (this.marked[i][j] == 2)
				this.marked[i][j] = 0;
};
OptimalAssignments(readline());

















































function OptimalAssignments(strArr) { 

  var costs = [];
  // row of costs corresponds to machine, column corresponds to cost  
  for (var i = 0; i < strArr.length; i++){
    costs.push(strArr[i].match(/d+/g));
  }
  
  var numBots = costs.length,
      numTasks = costs[0].length;
  
  function permutation(m, t, ind){
    // build permutation based on index
    var build = [],
        picks = [],
        count = 0;
    for (var i = 0; i < m; i++){
      picks.push(i);
    }
    for (count = m; count > m - t; count--){
      build.unshift(picks.splice(ind % count, 1)[0]);
      ind = Math.floor(ind / count);
    }
    return build;
  };

  function score(perm, costs){
    // based on perm, return score
    var score = 0;
    for (var i = 0; i < perm.length; i++){
      score += parseInt(costs[perm[i]][i]);
    }
    return score;
  }
  
  var lim = 1;
  for (var count = numBots; count > numBots - numTasks; count--){
    lim *= count;
  }
  var high = 0,
      curScore = 0,
      curBots = [];
      order = [];
  for (var i = 0; i < numTasks; i++){
    high += parseInt(costs[i][i]);
    order.push(i);
  }
  for (var i = 0; i < lim; i++){
    curBots = permutation(numBots, numTasks, i);
    curScore = score(curBots, costs);
    if (curScore < high){
      high = curScore;
      order = curBots;
    }
  }
  
  var ret = [];
  for (var i = 0; i < numBots; i++){
    ret.push('(' + (i + 1) + '-' + (order.indexOf(i) + 1) + ')');
  }    
  
  return ret.join('');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OptimalAssignments(readline());