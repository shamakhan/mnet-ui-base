"use strict";

exports.__esModule = true;
exports["default"] = useCustomSelectState;

var _react = require("react");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useCustomSelectState(options, value) {
  var _useState = (0, _react.useState)({
    filteredOptions: options,
    previousValue: value,
    open: false,
    searchVal: ''
  }),
      selectState = _useState[0],
      setStateValues = _useState[1];

  var filteredOptions = selectState.filteredOptions,
      previousValue = selectState.previousValue,
      open = selectState.open,
      searchVal = selectState.searchVal;

  var setSelectState = function setSelectState(params) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return setStateValues.apply(void 0, [_extends({}, selectState, params)].concat(rest));
  };

  return {
    filteredOptions: filteredOptions,
    previousValue: previousValue,
    open: open,
    searchVal: searchVal,
    setSelectState: setSelectState
  };
}