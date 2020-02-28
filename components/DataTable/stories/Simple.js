"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleDataTable = function SimpleDataTable() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.DataTable, {
    columns: _data.columns,
    data: _data.DATA,
    step: 10
  })));
};

(0, _react2.storiesOf)('DataTable', module).add('Simple', function () {
  return _react["default"].createElement(SimpleDataTable, null);
});