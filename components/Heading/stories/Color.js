"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Color = function Color() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Heading, {
    color: "accent-1"
  }, "Colored Heading"));
};

(0, _react2.storiesOf)('Heading', module).add('Color', function () {
  return _react["default"].createElement(Color, null);
});