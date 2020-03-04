"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

var _themes = require("mnet-ui-base/themes");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActionList = function ActionList() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.List, {
    data: _data.data.slice(0, 10),
    pad: {
      left: 'small',
      right: 'none'
    },
    action: function action() {
      return _react["default"].createElement(_mnetUiBase.Menu, {
        icon: _react["default"].createElement(_grommetIcons.More, null),
        hoverIndicator: true,
        items: [{
          label: 'one'
        }]
      });
    }
  })));
};

(0, _react2.storiesOf)('List', module).add('action', function () {
  return _react["default"].createElement(ActionList, null);
});