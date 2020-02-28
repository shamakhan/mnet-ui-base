"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _utils.deepMerge)(_themes.mnet, {
  list: {
    item: {
      pad: {
        horizontal: 'large',
        vertical: 'xsmall'
      },
      background: ['white', 'light-2'],
      border: true
    }
  }
});

var ThemedList = function ThemedList() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: theme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.List, {
    data: _data.locations
  })));
};

(0, _react2.storiesOf)('List', module).add('theme', function () {
  return _react["default"].createElement(ThemedList, null);
});