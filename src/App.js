"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./App.css");
require("bootstrap/dist/css/bootstrap.min.css");
var _Login = _interopRequireDefault(require("./views/Login"));
var _Signup = _interopRequireDefault(require("./views/Signup"));
var _Main = _interopRequireDefault(require("./views/Main"));
var _NotFound = _interopRequireDefault(require("./views/NotFound"));
var _AppAuthProvider = _interopRequireDefault(require("./components/AppAuthProvider"));
var _routes = _interopRequireDefault(require("./routes"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_AppAuthProvider.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: _routes.default.loginPage(),
    element: /*#__PURE__*/_react.default.createElement(_Login.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: _routes.default.signupPage(),
    element: /*#__PURE__*/_react.default.createElement(_Signup.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: _routes.default.mainPage(),
    element: /*#__PURE__*/_react.default.createElement(_Main.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "*",
    element: /*#__PURE__*/_react.default.createElement(_NotFound.default, null)
  })))));
}
var _default = exports.default = App;