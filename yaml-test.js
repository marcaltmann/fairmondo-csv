var
  // Modules
  fs        = require('fs'),
  yaml      = require('js-yaml'),

  // Variables
  filename        = process.argv[2]
;

try {
  var doc = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
