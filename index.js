'use strict';

String.prototype.resume = function(limit, glue) {
  var l = limit || 10;
  var g = glue || '...';

  return this.slice(0, l).trim() + g;
};

module.exports = String.resume;