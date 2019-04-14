let dir = process.argv[2] || process.cwd();
require('walk').walk("/Users/woojaepark/Desktop/mygrep/src/stories")

  // on file
  .on('file', function (root, fileStats, next) {
    console.log(require('path').join(root, fileStats.name));
    next();
  })

  .on('names', function (root, names, next) {

    console.log('names at : ' + root);
    console.log(names);
    console.log('');

    next();

  });
