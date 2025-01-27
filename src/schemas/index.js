"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupSchema = exports.loginSchema = void 0;
var yup = _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var loginSchema = exports.loginSchema = yup.object().shape({
  username: yup.string()
});
var signupSchema = exports.signupSchema = yup.object().shape({
  name: yup.string().required("Это поле обязательно").min(3, "Имя должно содержать не менее трех символов").max(20, "Имя должно содержать не более 20 символов").trim(),
  email: yup.string().required("Это поле обязательно").email("Должно быть валидным email").trim(),
  password: yup.string().trim().required("Это поле обязательно").min(6, "Пароль должен содержать не менее 6 симоволов"),
  confirmPassword: yup.string().trim().oneOf([yup.ref("password")], "Пароли должны совпадать").required("Это поле обязательно")
});