"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var boxStyle = {
  position: 'relative',
  display: 'block'
};
var titleBoxBackground = {
  color: 'neutral-1'
};
var titleBoxStyle = {
  position: 'sticky',
  top: 0
};
var checkboxes = Array(8).fill().map(function (_, i) {
  return "item " + (i + 1);
});

var removeItemFromArray = function removeItemFromArray(array, value) {
  return array.filter(function (item) {
    return item !== value;
  });
};

var CheckBoxWithStickyDiv = function CheckBoxWithStickyDiv() {
  var _useState = (0, _react.useState)([]),
      checks = _useState[0],
      setChecks = _useState[1];

  var onCheck = function onCheck(value) {
    return function (_ref) {
      var target = _ref.target;

      if (target.checked) {
        setChecks([].concat(checks, [value]));
      } else {
        setChecks(removeItemFromArray(checks, value));
      }
    };
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    height: "120px",
    width: "120px",
    overflow: "auto",
    style: boxStyle
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: titleBoxBackground,
    style: titleBoxStyle
  }, "Click & Scroll"), checkboxes.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
      key: item,
      checked: checks.includes(item),
      label: item,
      onChange: onCheck(item)
    });
  }))));
};

(0, _react2.storiesOf)('CheckBox', module).add('With Sticky Div', function () {
  return /*#__PURE__*/_react["default"].createElement(CheckBoxWithStickyDiv, null);
});