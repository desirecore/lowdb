"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _DataFile = require("./adapters/node/DataFile.js");
Object.keys(_DataFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DataFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DataFile[key];
    }
  });
});
var _JSONFile = require("./adapters/node/JSONFile.js");
Object.keys(_JSONFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _JSONFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _JSONFile[key];
    }
  });
});
var _TextFile = require("./adapters/node/TextFile.js");
Object.keys(_TextFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TextFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextFile[key];
    }
  });
});
var _node = require("./presets/node.js");
Object.keys(_node).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _node[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _node[key];
    }
  });
});