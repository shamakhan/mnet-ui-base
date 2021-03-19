"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _mnetUiBaseThemeHb = require("mnet-ui-base-theme-hb");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultOptions = ['China', 'USA', 'Russia', 'Brazil'];
var prefix = 'Create';

var updateCreateOption = function updateCreateOption(text) {
  var len = defaultOptions.length;

  if (defaultOptions[len - 1].includes(prefix)) {
    // remove Create option before adding an updated one
    defaultOptions.pop();
  }

  defaultOptions.push(prefix + " '" + text + "'");
};

var getRegExp = function getRegExp(text) {
  // The line below escapes regular expression special characters:
  // [ \ ^ $ . | ? * + ( )
  var escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'); // Create the regular expression with modified value which
  // handles escaping special characters. Without escaping special
  // characters, errors will appear in the console

  return new RegExp(escapedText, 'i');
};

var SelectMaterial = function SelectMaterial(_ref) {
  var rest = _extends({}, _ref);

  var _useState = (0, _react.useState)(defaultOptions),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = (0, _react.useState)(''),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      value = _useState3[0],
      setValue = _useState3[1];

  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _mnetUiBaseThemeHb.hb
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    height: "xsmall",
    width: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, _extends({
    id: "select",
    name: "select",
    placeholder: "Select",
    value: value,
    options: options,
    onClose: function onClose() {
      return setOptions(defaultOptions);
    },
    onSearch: function onSearch(text) {
      updateCreateOption(text);
      var exp = getRegExp(text);
      setOptions(defaultOptions.filter(function (o) {
        return exp.test(o);
      }));
      setSearchValue(text);
    }
  }, rest, {
    open: true,
    onChange: function onChange(_ref2) {
      var option = _ref2.option;

      if (option.includes(prefix)) {
        defaultOptions.pop(); // remove Create option

        defaultOptions.push(searchValue);
        setValue(searchValue);
      } else {
        setValue(option);
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    height: "xsmall",
    width: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, _extends({
    id: "select",
    name: "select",
    placeholder: "Select",
    value: value,
    options: options,
    onSearch: function onSearch(_) {
      return _;
    },
    onChange: function onChange(_ref3) {
      var option = _ref3.option;
      return setValue(option);
    }
  }, rest))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    height: "xsmall",
    width: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, _extends({
    id: "select",
    name: "select",
    placeholder: "Select",
    value: value,
    options: options,
    onSearch: function onSearch(_) {
      return _;
    },
    onChange: function onChange(_ref4) {
      var option = _ref4.option;
      return setValue(option);
    }
  }, rest))));
};

(0, _react2.storiesOf)('Select', module).add('SelectMaterial', function () {
  return /*#__PURE__*/_react["default"].createElement(SelectMaterial, {
    width: "xxlarge"
  });
});