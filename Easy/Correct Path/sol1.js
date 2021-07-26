function CorrectPath(str) {
  let paths = [""];
  for (let i = 0; i < str.length; i++) {
    const dirs = ["u", "d", "l", "r"];
    if (str[i] === "?") {
      const newPaths = [];
      paths.forEach(path => dirs.forEach(dir => newPaths.push(path + dir)));
      paths = newPaths;
    }
  }
  pathcheck: for (path of paths) {
    let j = 0,
      x = 0,
      y = 0;
    for (let i = 0; i < str.length; i++) {
      let dir = str[i];
      if (dir === "?") {
        dir = path[j];
        j++;
      }
      if (dir === "u") {
        y--;
      } else if (dir === "d") {
        y++;
      } else if (dir === "l") {
        x--;
      } else if (dir === "r") {
        x++;
      }
      if (x < 0 || x > 4 || y < 0 || y > 4) {
        continue pathcheck;
      }
    }
    if (x === 4 && y === 4) {
      j = 0;
      let correctPath = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "?") {
          correctPath += path[j];
          j++;
        } else {
          correctPath += str[i];
        }
      }
      return correctPath;
    }
  }
  return "not possible";
}
   
// keep this function call here 
CorrectPath(readline());