"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IndeterminateCheckBox = function IndeterminateCheckBox() {
  var _useState = (0, _react.useState)([]),
      checked = _useState[0],
      setChecked = _useState[1];

  var checkboxes = ['fruits', 'vegetables', 'olive oil'];

  var onCheckAll = function onCheckAll(event) {
    if (event.target.checked) {
      setChecked(checkboxes);
    } else {
      setChecked([]);
    }
  };

  var onCheck = function onCheck(event, value) {
    if (event.target.checked) {
      setChecked([].concat(checked, [value]));
    } else {
      setChecked(checked.filter(function (item) {
        return item !== value;
      }));
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
    checked: checked.length === 3,
    indeterminate: checked.length > 0 && checked.length < 3,
    label: "All",
    onChange: onCheckAll
  }), checkboxes.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.CheckBox, {
      key: item,
      checked: checked.includes(item),
      label: item,
      onChange: function onChange(e) {
        return onCheck(e, item);
      }
    });
  }))));
};

(0, _react2.storiesOf)('CheckBox', module).add('Indeterminate', function () {
  return /*#__PURE__*/_react["default"].createElement(IndeterminateCheckBox, null);
});