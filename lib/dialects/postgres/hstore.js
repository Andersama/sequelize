'use strict';
let hstore = {stringify: function(val){return "{}";}, parse: function(val){return {};}}
try {
  hstore = require('pg-hstore')({ sanitize: true });
} catch(err) {
  hstore = {stringify: function(val){return "{}";}, parse: function(val){return {};}}
}

function stringify(data) {
  if (data === null) return null;
  return hstore.stringify(data);
}
exports.stringify = stringify;

function parse(value) {
  if (value === null) return null;
  return hstore.parse(value);
}
exports.parse = parse;
