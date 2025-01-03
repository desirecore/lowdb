"use strict";

var _strict = require("node:assert/strict");
var _nodeTest = _interopRequireDefault(require("node:test"));
var _WebStorage = require("./WebStorage.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var storage = {};
// Mock localStorage
var mockStorage = function mockStorage() {
  return {
    getItem: function getItem(key) {
      return storage[key] || null;
    },
    setItem: function setItem(key, data) {
      return storage[key] = data;
    },
    length: 1,
    removeItem: function removeItem() {
      return;
    },
    clear: function clear() {
      return;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: function key(_) {
      return '';
    }
  };
};
global.localStorage = mockStorage();
global.sessionStorage = mockStorage();
await (0, _nodeTest["default"])('localStorage', function () {
  var obj = {
    a: 1
  };
  var storage = new _WebStorage.WebStorage('key', localStorage);
  // Write
  (0, _strict.equal)(storage.write(obj), undefined);
  // Read
  (0, _strict.deepEqual)(storage.read(), obj);
});
await (0, _nodeTest["default"])('sessionStorage', function () {
  var obj = {
    a: 1
  };
  var storage = new _WebStorage.WebStorage('key', sessionStorage);
  // Write
  (0, _strict.equal)(storage.write(obj), undefined);
  // Read
  (0, _strict.deepEqual)(storage.read(), obj);
});