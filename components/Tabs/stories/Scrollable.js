"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ScrollableTabs = function ScrollableTabs() {
  return _react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true
  }, _react["default"].createElement(_mnetUiBase.Tabs, {
    flex: true
  }, _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 1"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    overflow: "auto",
    pad: "xlarge",
    align: "center",
    background: "accent-1"
  }, _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"), _react["default"].createElement(_mnetUiBase.Heading, null, "hello!"))), _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 2"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, _react["default"].createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))))));
};

(0, _react2.storiesOf)('Tabs', module).add('Scrollable', function () {
  return _react["default"].createElement(ScrollableTabs, null);
});