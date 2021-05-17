"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var customTheme = (0, _utils.deepMerge)(_themes.mnet, {
  global: {
    focus: {
      border: {
        color: 'red'
      },
      shadow: {
        color: 'red'
      }
    }
  }
});

var GlobalThemeWithThemeContext = function GlobalThemeWithThemeContext() {
  var options = ['one', 'two', 'three'];

  var _useState = (0, _react.useState)(''),
      valueRed = _useState[0],
      setValueRed = _useState[1];

  var _useState2 = (0, _react.useState)(''),
      valueBlue = _useState2[0],
      setValueBlue = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    direction: "column",
    gap: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "medium"
  }, "The focus color of this select component is being altered by the custom theme that is passed into the MnetUIBase component."), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    alignSelf: "center",
    placeholder: "Select",
    value: valueRed,
    options: options,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setValueRed(option);
    }
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.ThemeContext.Extend, {
    value: {
      global: {
        focus: {
          border: {
            color: 'blue'
          }
        }
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "medium"
  }, "The focus color of this select component is being altered by ThemeContext, independent from the custom theme"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    alignSelf: "center",
    placeholder: "Select",
    value: valueBlue,
    options: options,
    onChange: function onChange(_ref2) {
      var option = _ref2.option;
      return setValueBlue(option);
    }
  })))));
};

(0, _react2.storiesOf)('Theme', module).add('ThemeContext.Extend', function () {
  return /*#__PURE__*/_react["default"].createElement(GlobalThemeWithThemeContext, null);
});