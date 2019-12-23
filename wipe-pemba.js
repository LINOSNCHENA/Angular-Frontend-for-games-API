var fs = require('fs'),

  wipepembas = function() {
    var file  = fs.readFileSync('package.json');
    var content = JSON.parse(file);
    for (var devDep in content.devDependencies) {
      content.devDependencies[devDep] = '*';
    }
    for (var dep in content.dependencies) {
      content.dependencies[dep] = '*';
    }
    fs.writeFileSync('package.json', JSON.stringify(content,null,2));
  };


if (require.main === module) {
  wipepembas();
} else {
  module.exports = wipepembas;
}