"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customTheme = {
  global: {
    colors: {
      custom: '#cc6633'
    }
  }
};

var Themed = function Themed() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Anchor, {
    icon: _react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    color: "custom"
  })));
};

var Plain = function Plain() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    plain: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement("p", null, "Plain MnetUIBase"))), _react["default"].createElement(_mnetUiBase.MnetUIBase, null, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement("p", null, "Not plain MnetUIBase"))));
};

var MnetUIBaseVars = function MnetUIBaseVars() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    cssVars: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "var(--accent-2)",
    gap: "medium"
  }, _react["default"].createElement(_mnetUiBase.Box, null, "Checkout MnetUIBase variables, you can find them in the StyledMnetUIBase DOM."), _react["default"].createElement(_mnetUiBase.Box, {
    "with": true
  }, "For example, the background color in this Box is using var(--accent-2)")));
};

(0, _react2.storiesOf)('MnetUIBase', module).add('Plain', function () {
  return _react["default"].createElement(Plain, null);
}).add('Theme', function () {
  return _react["default"].createElement(Themed, null);
}).add('Vars', function () {
  return _react["default"].createElement(MnetUIBaseVars, null);
});