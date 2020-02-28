"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MultipleButton = function MultipleButton() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    color: "dark-1",
    primary: true,
    icon: _react["default"].createElement(_grommetIcons.Add, {
      color: "accent-1"
    }),
    label: "Add",
    onClick: function onClick() {}
  })), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    color: "dark-1",
    primary: true,
    icon: _react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    onClick: function onClick() {}
  })), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    icon: _react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    onClick: function onClick() {}
  })), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    color: "light-2",
    primary: true,
    icon: _react["default"].createElement(_grommetIcons.Add, null),
    label: "Add",
    onClick: function onClick() {}
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Multiple', function () {
  return _react["default"].createElement(MultipleButton, null);
});