"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fontfaceobserver = _interopRequireDefault(require("fontfaceobserver"));

var _createClassList = _interopRequireDefault(require("../../helpers/createClassList"));

require("./logo.scss");

var _ref2 = /*#__PURE__*/_react["default"].createElement("span", null, "Component Browser");

/** A simple Logo component */
var Logo = function Logo(_ref) {
  var fontSize = _ref.fontSize,
      padding = _ref.padding;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLoadingFonts = _useState2[0],
      setIsLoadingFonts = _useState2[1];

  (0, _react.useEffect)(function () {
    var isSubscribed = true;
    var font = new _fontfaceobserver["default"]('Share Tech Mono');
    font.load().then(function () {
      if (isSubscribed) {
        setIsLoadingFonts(false);
      }
    })["catch"](function (err) {
      if (isSubscribed) {
        throw new Error(err);
      }
    });
  }, []);
  var containerClasses = (0, _createClassList["default"])([isLoadingFonts ? "logo-container--is-loading-fonts" : "", "logo-container"]);
  var customStyles = {};

  if (fontSize) {
    customStyles.fontSize = fontSize;
  }

  if (padding) {
    customStyles.padding = padding;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: containerClasses,
    style: customStyles
  }, _ref2);
};

var _default = (0, _react.memo)(Logo);

exports["default"] = _default;
Logo.displayName = 'Logo';