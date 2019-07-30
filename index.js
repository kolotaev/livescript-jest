var livescript = require('livescript');

compileOptions = {
  'bare': true
}

module.exports = {
  process: function(src, path) {
    if (path.match(/\.ls$/)) {
      return livescript.compile(src, compileOptions);
    }
    return src;
  }
};
