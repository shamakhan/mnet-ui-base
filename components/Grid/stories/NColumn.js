"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NColumnGrid = function NColumnGrid() {
  return _react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, _react["default"].createElement(_mnetUiBase.Grid, {
    columns: {
      count: 6,
      size: 'auto'
    },
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 1"), _react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 2"), _react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 3"), _react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 4"), _react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 5"), _react["default"].createElement(_mnetUiBase.Box, {
    background: "brand"
  }, "Item 6")));
};

(0, _react2.storiesOf)('Grid', module).add('N-column layout', function () {
  return _react["default"].createElement(NColumnGrid, null);
});