var livescript = require('livescript');

compileOptions = {
  bare: true,
  map: "embedded"
}

module.exports = {
  process: function(src, path) {
    if (path.match(/\.ls$/)) {
      let compiledObject = livescript.compile(src, {...compileOptions, filename: path});
      return {
        code: compiledObject.code,
        map: compiledObject.map.toString()
      }
    }
    return src;
  }
};