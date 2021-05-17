"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Example = function Example() {
  var _useState = (0, _react.useState)(['First', 'Second']),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0, _react.useState)(['M']),
      value2 = _useState2[0],
      setValue2 = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "large"
  }, "Initial value via options object:", /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    value: value,
    onChange: function onChange(event) {
      console.log('value: ', event.value);
      console.log('option: ', event.option);
      setValue(event.value);
    },
    options: ['First', 'Second', 'Third']
  }), "Initial value via controlled options object:", /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    labelKey: "label",
    valueKey: "id",
    value: value2,
    onChange: function onChange(_ref) {
      var nextValue = _ref.value,
          option = _ref.option;
      console.log('nextValue: ', nextValue);
      console.log('option: ', option);
      setValue2(nextValue);
    },
    options: [{
      label: 'Maui',
      id: 'M'
    }, {
      label: 'Jerusalem',
      id: 'J'
    }, {
      label: 'Wuhan',
      id: 'W'
    }]
  })));
};

(0, _react2.storiesOf)('CheckBoxGroup', module).add('Initial value', function () {
  return /*#__PURE__*/_react["default"].createElement(Example, null);
});