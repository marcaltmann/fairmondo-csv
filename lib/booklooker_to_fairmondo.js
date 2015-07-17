module.exports = function (data) {
  var
    category_id = data[0],
    author      = data[1],
    title       = data[2],
    description = data[9]

  ;

  return [
    '',
    author + ': ' + title,
    category_id,
    '',
    description];
};
