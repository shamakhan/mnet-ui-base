"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var IconPlain = function IconPlain() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "small"
  }, " plain=true (no padding, no border) "), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    icon: _react["default"].createElement(_grommetIcons.Close, null),
    onClick: function onClick() {},
    primary: true
  }), "ye", _react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    icon: _react["default"].createElement(_grommetIcons.Send, null),
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    plain: true,
    icon: _react["default"].createElement(_grommetIcons.User, null),
    onClick: function onClick() {}
  }))), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "small"
  }, " plain=false (includes padding and border)"), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    plain: false,
    icon: _react["default"].createElement(_grommetIcons.Close, null),
    onClick: function onClick() {},
    primary: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    plain: false,
    icon: _react["default"].createElement(_grommetIcons.Send, null),
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    plain: false,
    icon: _react["default"].createElement(_grommetIcons.User, null),
    onClick: function onClick() {}
  }))), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "small"
  }, " plain=undefined (with padding, no border) "), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Close, null),
    onClick: function onClick() {},
    primary: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Send, null),
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.User, null),
    onClick: function onClick() {}
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Icon Plain', function () {
  return _react["default"].createElement(IconPlain, null);
});