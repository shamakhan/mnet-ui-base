"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Size = function Size() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(function (size) {
    return _react["default"].createElement(_mnetUiBase.Box, {
      key: size,
      margin: "small"
    }, _react["default"].createElement(_mnetUiBase.Anchor, {
      size: size,
      label: size,
      href: "#"
    }));
  })));
};

(0, _react2.storiesOf)('Anchor', module).add('Size', function () {
  return _react["default"].createElement(Size, null);
});