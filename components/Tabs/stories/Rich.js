"use strict";

exports.__esModule = true;
exports.RichTabTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RichTabs = function RichTabs() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Tabs, null, _react["default"].createElement(_mnetUiBase.Tab, {
    title: _react["default"].createElement(RichTabTitle, {
      icon: _react["default"].createElement(_grommetIcons.CircleInformation, {
        color: "accent-2"
      }),
      label: "Personal Data"
    })
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name"
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "Enter your name..."
  }))), _react["default"].createElement(_mnetUiBase.Tab, {
    title: _react["default"].createElement(RichTabTitle, {
      icon: _react["default"].createElement(_grommetIcons.Currency, {
        color: "neutral-2"
      }),
      label: "Payment"
    })
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Card Number"
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    placeholder: "Enter your card number..."
  })))));
};

var RichTabTitle = function RichTabTitle(_ref) {
  var icon = _ref.icon,
      label = _ref.label;
  return _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, _react["default"].createElement(_mnetUiBase.Text, {
    size: "small"
  }, _react["default"].createElement("strong", null, label)));
};

exports.RichTabTitle = RichTabTitle;
RichTabTitle.propTypes = {
  icon: _propTypes["default"].node.isRequired,
  label: _propTypes["default"].string.isRequired
};
(0, _react2.storiesOf)('Tabs', module).add('Rich', function () {
  return _react["default"].createElement(RichTabs, null);
});