"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _likeEmpty = _interopRequireDefault(require("../assets/images/like-empty.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var UserCard = function UserCard(props) {
  var user = props.user;
  var avatar = user.avatar;
  return /*#__PURE__*/React.createElement("div", {
    className: "card custom-card rounded-3 border-0 p-2 pt-4",
    style: {
      width: 305 + "px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body d-flex flex-column align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-avatar",
    style: {
      width: 124 + "px",
      height: 124 + "px",
      backgroundImage: "url(".concat(avatar, ")")
    }
  }), /*#__PURE__*/React.createElement("h4", {
    className: "card-title pt-3"
  }, user.first_name, " ", user.last_name), /*#__PURE__*/React.createElement("div", {
    className: "w-100 d-flex justify-content-end pt-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: _likeEmpty.default,
    alt: "like-icon",
    style: {
      maxHeight: 28 + 'px'
    }
  }))));
};
var _default = exports.default = UserCard;