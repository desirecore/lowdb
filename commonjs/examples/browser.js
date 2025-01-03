"use strict";

var _browser = require("../presets/browser.js");
var defaultData = {
  messages: []
};
var db = (0, _browser.LocalStoragePreset)('db', defaultData);
db.update(function (_ref) {
  var messages = _ref.messages;
  return messages.push('foo');
});