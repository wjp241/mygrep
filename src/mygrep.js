var fs = require('fs');
var path = require('path');
const subdirs = fs.readdirSync('stories');
function a(dir = 'stories') {
  let files = [], dirs = [];
  for (let i = 0; i < subdirs.length; i++) {
    if (fs.statSync('stories/' + subdirs[i]).isDirectory()) dirs.push(subdirs[i]);
    if (fs.statSync('stories/' + subdirs[i]).isFile()) files.push(subdirs[i]);
  }

  for (let j = 0; j < files.length; j++) {
    const inputStr = fs.readFileSync('stories/' + files[j], { encoding: "utf-8" }).trim();
    const inputArr = inputStr.split('\n');
    for (let k = 0; k < inputArr.length; k++) {
      if (inputArr[k].includes('like')) console.log(`${path.join(__dirname, files[j])}:${k}\t ${inputArr[k]}`);
    }
  }

  for (let l = 0; l < dirs.length; l++) {

  }
}

