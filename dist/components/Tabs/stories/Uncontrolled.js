"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UncontrolledTabs = function UncontrolledTabs(_ref) {
  var _ref$plain = _ref.plain,
      plain = _ref$plain === void 0 ? false : _ref$plain;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tabs, {
    flex: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    plain: plain,
    title: "Tab 1"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-1"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Attraction, {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    plain: plain,
    title: "Tab 2"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-2"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Tab, {
    plain: plain,
    title: "Tab 3"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-3"
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Car, {
    size: "xlarge"
  }))))));
};

UncontrolledTabs.propTypes = {
  plain: _propTypes["default"].bool // eslint-disable-line react/require-default-props

};
(0, _react2.storiesOf)('Tabs', module).add('Uncontrolled', function () {
  return /*#__PURE__*/_react["default"].createElement(UncontrolledTabs, null);
}).add('Plain', function () {
  return /*#__PURE__*/_react["default"].createElement(UncontrolledTabs, {
    plain: true
  });
});