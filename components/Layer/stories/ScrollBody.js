"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ScrollBodyLayer = function ScrollBodyLayer() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Layer, {
    full: "vertical",
    position: "right"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    style: {
      minWidth: '378px'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    as: "header",
    elevation: "small",
    justify: "between"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: {
      left: 'small'
    }
  }, "Header"), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.FormClose, null)
  })), _react["default"].createElement(_mnetUiBase.Box, {
    flex: true,
    overflow: "auto",
    pad: "xsmall"
  }, _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body"), _react["default"].createElement("span", null, "body")), _react["default"].createElement(_mnetUiBase.Box, {
    as: "footer",
    border: {
      side: 'top'
    },
    pad: "small",
    justify: "end",
    direction: "row",
    align: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: "Save"
  })))));
};

(0, _react2.storiesOf)('Layer', module).add('Fixed Header, Scroll Body', function () {
  return _react["default"].createElement(ScrollBodyLayer, null);
});