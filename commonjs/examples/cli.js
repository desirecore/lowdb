"use strict";

var _node = require("../presets/node.js");
var message = process.argv[2] || '';
var defaultData = {
  messages: []
};
var db = (0, _node.JSONFileSyncPreset)('file.json', defaultData);
db.update(function (_ref) {
  var messages = _ref.messages;
  return messages.push(message);
});