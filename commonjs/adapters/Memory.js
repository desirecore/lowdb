"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemorySync = exports.Memory = void 0;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _data = /*#__PURE__*/new WeakMap();
var Memory = exports.Memory = /*#__PURE__*/function () {
  function Memory() {
    _classCallCheck(this, Memory);
    _classPrivateFieldInitSpec(this, _data, null);
  }
  return _createClass(Memory, [{
    key: "read",
    value: function read() {
      return Promise.resolve(_classPrivateFieldGet(_data, this));
    }
  }, {
    key: "write",
    value: function write(obj) {
      _classPrivateFieldSet(_data, this, obj);
      return Promise.resolve();
    }
  }]);
}();
var _data2 = /*#__PURE__*/new WeakMap();
var MemorySync = exports.MemorySync = /*#__PURE__*/function () {
  function MemorySync() {
    _classCallCheck(this, MemorySync);
    _classPrivateFieldInitSpec(this, _data2, null);
  }
  return _createClass(MemorySync, [{
    key: "read",
    value: function read() {
      return _classPrivateFieldGet(_data2, this) || null;
    }
  }, {
    key: "write",
    value: function write(obj) {
      _classPrivateFieldSet(_data2, this, obj);
    }
  }]);
}();