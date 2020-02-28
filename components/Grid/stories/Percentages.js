"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Percentages = function Percentages() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Grid, {
    fill: true,
    areas: [{
      name: 'nav',
      start: [0, 0],
      end: [0, 0]
    }, {
      name: 'main',
      start: [1, 0],
      end: [1, 0]
    }],
    columns: ['small', 'flex'],
    rows: ['flex'],
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "nav",
    background: "brand"
  }), _react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "main",
    background: "brand"
  })));
};

(0, _react2.storiesOf)('Grid', module).add('Percentages', function () {
  return _react["default"].createElement(Percentages, null);
});