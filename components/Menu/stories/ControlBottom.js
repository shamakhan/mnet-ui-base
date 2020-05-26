"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ControlBottom = function ControlBottom() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_mnetUiBase.Box, {
    height: "medium",
    justify: "center",
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Menu, {
    dropProps: {
      align: {
        bottom: 'bottom',
        left: 'left'
      }
    },
    label: "actions",
    items: [{
      label: 'Profile',
      onClick: function onClick() {}
    }, {
      label: 'Settings',
      onClick: function onClick() {}
    }, {
      label: 'FAQ',
      onClick: function onClick() {}
    }]
  })));
};

(0, _react2.storiesOf)('Menu', module).add('Bottom Control Button', function () {
  return _react["default"].createElement(ControlBottom, null);
});