"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customTheme = (0, _utils.deepMerge)(_themes.mnet, {
  tab: {
    color: 'text',
    active: {
      background: 'background-back'
    },
    hover: {
      background: 'background-back',
      color: 'control'
    },
    border: {
      side: 'bottom',
      color: 'background-back',
      active: {
        color: 'border'
      },
      hover: {
        color: 'control'
      }
    },
    pad: 'small',
    margin: 'none',
    extend: function extend(_ref) {
      var theme = _ref.theme;
      return (0, _styledComponents.css)(["border-top-left-radius:", ";border-top-right-radius:", ";font-weight:bold;"], theme.global.control.border.radius, theme.global.control.border.radius);
    }
  }
});

var Icon = function Icon() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    fill: true
  }, _react["default"].createElement(_mnetUiBase.Tabs, {
    flex: true
  }, _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 1",
    icon: _react["default"].createElement(_grommetIcons.Attraction, null)
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-1"
  }, _react["default"].createElement(_grommetIcons.Attraction, {
    size: "xlarge"
  }))), _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 2",
    icon: _react["default"].createElement(_grommetIcons.TreeOption, null)
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-2"
  }, _react["default"].createElement(_grommetIcons.TreeOption, {
    size: "xlarge"
  }))), _react["default"].createElement(_mnetUiBase.Tab, {
    title: "Tab 3",
    icon: _react["default"].createElement(_grommetIcons.Car, null)
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-3"
  }, _react["default"].createElement(_grommetIcons.Car, {
    size: "xlarge"
  }))))));
};

(0, _react2.storiesOf)('Tabs', module).add('Icon', function () {
  return _react["default"].createElement(Icon, null);
});