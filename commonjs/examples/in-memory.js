"use strict";

var _index = require("../index.js");
var _node = require("../node.js");
// With this adapter, calling `db.write()` will do nothing.
// One use case for this adapter can be for tests.

var defaultData = {};
var adapter = process.env.NODE_ENV === 'test' ? new _index.MemorySync() : new _node.JSONFileSync('db.json');
var db = new _index.LowSync(adapter, defaultData);
db.read();
// Rest of your code...