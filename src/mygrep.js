var fs = require('fs');
var path = require('path');
function a(dir = path.join(__dirname, "stories")) {
  console.log(dir)
  const subdirs = fs.readdirSync(dir);
  let files = [], dirs = [];
  for (let i = 0; i < subdirs.length; i++) {
    if (fs.statSync(`${dir}/` + subdirs[i]).isDirectory()) dirs.push(subdirs[i]);
    if (fs.statSync(`${dir}/` + subdirs[i]).isFile()) files.push(subdirs[i]);
  }

  for (let j = 0; j < files.length; j++) {
    const inputStr = fs.readFileSync(`${dir}/` + files[j], { encoding: "utf-8" }).trim();
    const inputArr = inputStr.split('\n');
    for (let k = 0; k < inputArr.length; k++) {
      if (inputArr[k].includes('like')) console.log(`${path.join(__dirname, files[j])}:${k}\t ${inputArr[k]}`);
    }
  }

  for (let l = 0; l < dirs.length; l++) {
    a(path.join(dir, dirs[l]))
  }
}

a()
