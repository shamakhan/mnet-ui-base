"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleDistribution = function SimpleDistribution() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Distribution, {
    fill: true,
    values: [{
      value: 50,
      color: 'light-3'
    }, {
      value: 30,
      color: 'neutral-1'
    }, {
      value: 20,
      color: 'brand'
    }, {
      value: 10,
      color: 'light-3'
    }, {
      value: 5,
      color: 'neutral-1'
    }]
  }, function (value) {
    return _react["default"].createElement(_mnetUiBase.Box, {
      pad: "xsmall",
      background: value.color,
      fill: true
    }, _react["default"].createElement(_mnetUiBase.Text, {
      size: "large"
    }, value.value));
  }));
};

(0, _react2.storiesOf)('Distribution', module).add('Simple', function () {
  return _react["default"].createElement(SimpleDistribution, null);
});