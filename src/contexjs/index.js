"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var AuthContext = /*#__PURE__*/(0, _react.createContext)({
  loggedIn: false,
  logIn: function logIn() {
    return false;
  },
  logOut: function logOut() {
    return true;
  },
  saveToken: function saveToken() {
    return undefined;
  },
  userName: ""
});
var _default = exports.default = AuthContext;