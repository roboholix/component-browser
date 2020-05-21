"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _Logo = _interopRequireDefault(require("./Logo"));

var _ref = /*#__PURE__*/_react["default"].createElement(_Logo["default"], null);

var _ref2 = /*#__PURE__*/_react["default"].createElement(_Logo["default"], null);

describe("Logo", function () {
  test("renders without blowing up", function () {
    var component = _reactTestRenderer["default"].create(_ref).toJSON();

    expect(component).toMatchSnapshot();
  });
  test("displays the correct text", function () {
    var wrapper = (0, _enzyme.mount)(_ref2);
    expect(wrapper.text()).toContain("Component Browser");
  });
});