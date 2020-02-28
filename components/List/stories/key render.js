"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderedList = function RenderedList() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.List, {
    data: _data.data.slice(0, 10),
    primaryKey: function primaryKey(item) {
      return _react["default"].createElement(_mnetUiBase.Text, {
        size: "large",
        weight: "bold"
      }, item.entry);
    },
    secondaryKey: function secondaryKey(item) {
      return _react["default"].createElement(_mnetUiBase.Text, {
        size: "small",
        color: "dark-4"
      }, item.location);
    }
  })));
};

(0, _react2.storiesOf)('List', module).add('key render', function () {
  return _react["default"].createElement(RenderedList, null);
});