function createLib (execlib) {
  return execlib.loadDependencies('client', ['allex:base:parser', 'allex:positionbasedprocessing:parser'], createPositionBasedParser.bind(null, execlib));
}

function createPositionBasedParser (execlib, BaseParser, PositionBasedProcessor) {
  'use strict';

  var lib = execlib.lib;

  function PositionBasedTextParser (prophash) {
    BaseParser.call(this, prophash);
    PositionBasedProcessor.call(this, 'text');
  }
  lib.inherit(PositionBasedTextParser, BaseParser);
  PositionBasedProcessor.addMethods(PositionBasedTextParser);

  PositionBasedTextParser.prototype.isNewRecord = function (data) {
    return true;
  };

  return PositionBasedTextParser;
}

module.exports = createLib;
