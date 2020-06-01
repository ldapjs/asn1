// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

var errors = require('./errors');
var types = require('./types');

var Reader = require('./reader');
var Writer = require('./writer');


// --- Exports

module.exports = {

  Reader: Reader,

  Writer: Writer

};

for (var t in types) {
  if (Object.prototype.hasOwnProperty.call(types, t)) {
    module.exports[t] = types[t];
  }
}
for (var e in errors) {
  if (Object.prototype.hasOwnProperty.call(errors, e)) {
    module.exports[e] = errors[e];
  }
}
