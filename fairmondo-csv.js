var
  // Modules
  fs        = require('fs'),
  path      = require('path'),
  parse     = require('csv').parse,
  transform = require('csv').transform,
  stringify = require('csv').stringify,

  // Variables
  filename        = process.argv[2],
  extension       = path.extname(filename),
  basename        = path.basename(filename, extension),
  readableStream  = fs.createReadStream(filename, {encoding: 'utf8'}),
  parser          = parse({delimiter: '\t'}),
  stringifier     = stringify({header: true, delimiter: ';'}),
  writeableStream = fs.createWriteStream(basename + '_fm' + extension),

  // Transformers
  booklookerToFairmondo = require('./lib/booklooker_to_fairmondo')
;

readableStream
  .pipe(parser)
  .pipe(transform(booklookerToFairmondo))
  .pipe(stringifier)
  .pipe(writeableStream);
