'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require('slate');

var _immutable = require('immutable');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sep = '\n';
var CODE_LINE = 'code_line';
var CODE_BLOCK = 'code_block';

exports.default = {
  deserialize: deserialize,
  serialize: _slatePlainSerializer2.default.serialize
};


function deserialize(string, syntax) {
  var coceLines = (0, _immutable.List)(string.split(sep)).map(function (line) {
    return _slate.Block.create({
      type: CODE_LINE,
      nodes: [_slate.Text.create(line)]
    });
  });
  var codeBlock = _slate.Block.create({
    data: { syntax: syntax },
    type: CODE_BLOCK,
    nodes: coceLines
  });
  var document = _slate.Document.create({ nodes: [codeBlock] });
  var value = _slate.Value.create({ document: document });
  return value;
}