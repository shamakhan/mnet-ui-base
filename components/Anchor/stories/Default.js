"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Default = function Default() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Anchor, {
    href: "#"
  }, "Link")));
};

(0, _react2.storiesOf)('Anchor', module).add('Default', function () {
  return _react["default"].createElement(Default, null);
});