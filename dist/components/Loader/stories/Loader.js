"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _Loader = require("../Loader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoaderPreview = function LoaderPreview() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "large"
  }, "Circle Loader"), /*#__PURE__*/_react["default"].createElement(_Loader.Loader, {
    primaryColor: "control",
    secondaryColor: "white",
    round: "50%"
  })), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "small",
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
    margin: "large"
  }, "Inline Button Loader"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: "Loading",
    isLoading: true,
    background: "brand"
  })));
};

(0, _react2.storiesOf)('Loader', module).add('Loaders', function () {
  return /*#__PURE__*/_react["default"].createElement(LoaderPreview, null);
});