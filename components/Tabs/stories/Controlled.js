"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ControlledTabs = function ControlledTabs() {
  var _React$useState = _react["default"].useState(),
      index = _React$useState[0],
      setIndex = _React$useState[1];

  var onActive = function onActive(nextIndex) {
    return setIndex(nextIndex);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Tabs, {
    activeIndex: index,
    onActive: onActive
  }, _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 1"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-1"
  }, _react["default"].createElement(_grommetIcons.Attraction, {
    size: "xlarge"
  }))), _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 2"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, _react["default"].createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))), _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 3"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-3"
  }, _react["default"].createElement(_grommetIcons.Car, {
    size: "xlarge"
  })))));
};

(0, _react2.storiesOf)('Tabs', module).add('Controlled', function () {
  return _react["default"].createElement(ControlledTabs, null);
});