"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _LocalStorage = require("./adapters/browser/LocalStorage.js");
Object.keys(_LocalStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _LocalStorage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _LocalStorage[key];
    }
  });
});
var _SessionStorage = require("./adapters/browser/SessionStorage.js");
Object.keys(_SessionStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SessionStorage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SessionStorage[key];
    }
  });
});
var _browser = require("./presets/browser.js");
Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _browser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});