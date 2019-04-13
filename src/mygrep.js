var fs = require('fs');
var path = require('path');
var startPoint = path.join(__dirname, "stories");

function a(dir = startPoint) {
  const subDirs = fs.readdirSync(dir);
  let files = [], dirs = [];

  for (let i = 0; i < subDirs.length; i++) {
    const dirStat = fs.statSync(`${dir}/` + subDirs[i]);
    if (dirStat.isDirectory()) dirs.push(subDirs[i]);
    if (dirStat.isFile()) files.push(subDirs[i]);
  }

  for (let j = 0; j < files.length; j++) {
    const inputStr = fs.readFileSync(`${dir}/` + files[j], { encoding: "utf-8" }).trim();
    const inputArr = inputStr.split('\n');

    for (let k = 0; k < inputArr.length; k++) {
      const filePath = path.join(dir, files[j]);
      if (inputArr[k].includes('like')) console.log(`${filePath}:${k}\t ${inputArr[k]}`);
    }
  }

  //base case
  if (!dirs.length) {
    return;
  } else {
    const nextPath = path.join(dir, dirs[l]);
    for (let l = 0; l < dirs.length; l++) a(nextPath);
  }
}

a()
