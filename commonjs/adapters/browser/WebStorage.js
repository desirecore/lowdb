"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebStorage = void 0;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _key = /*#__PURE__*/new WeakMap();
var _storage = /*#__PURE__*/new WeakMap();
var WebStorage = exports.WebStorage = /*#__PURE__*/function () {
  function WebStorage(key, storage) {
    _classCallCheck(this, WebStorage);
    _classPrivateFieldInitSpec(this, _key, void 0);
    _classPrivateFieldInitSpec(this, _storage, void 0);
    _classPrivateFieldSet(_key, this, key);
    _classPrivateFieldSet(_storage, this, storage);
  }
  return _createClass(WebStorage, [{
    key: "read",
    value: function read() {
      var value = _classPrivateFieldGet(_storage, this).getItem(_classPrivateFieldGet(_key, this));
      if (value === null) {
        return null;
      }
      return JSON.parse(value);
    }
  }, {
    key: "write",
    value: function write(obj) {
      _classPrivateFieldGet(_storage, this).setItem(_classPrivateFieldGet(_key, this), JSON.stringify(obj));
    }
  }]);
}();