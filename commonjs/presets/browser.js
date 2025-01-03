"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStoragePreset = LocalStoragePreset;
exports.SessionStoragePreset = SessionStoragePreset;
var _LocalStorage = require("../adapters/browser/LocalStorage.js");
var _SessionStorage = require("../adapters/browser/SessionStorage.js");
var _index = require("../index.js");
function LocalStoragePreset(key, defaultData) {
  var adapter = new _LocalStorage.LocalStorage(key);
  var db = new _index.LowSync(adapter, defaultData);
  db.read();
  return db;
}
function SessionStoragePreset(key, defaultData) {
  var adapter = new _SessionStorage.SessionStorage(key);
  var db = new _index.LowSync(adapter, defaultData);
  db.read();
  return db;
}