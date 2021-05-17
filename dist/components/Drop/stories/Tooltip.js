"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TooltipDrop = function TooltipDrop() {
  var _useState = (0, _react.useState)(),
      over = _useState[0],
      setOver = _useState[1];

  var ref = (0, _react.useRef)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "Button",
    ref: ref,
    onMouseOver: function onMouseOver() {
      return setOver(true);
    },
    onMouseOut: function onMouseOut() {
      return setOver(false);
    },
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
  }), ref.current && over && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Drop, {
    align: {
      left: 'right'
    },
    target: ref.current,
    plain: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    margin: "xsmall",
    pad: "small",
    background: "dark-3",
    round: {
      size: 'medium',
      corner: 'left'
    }
  }, "tooltip contents"))));
};

(0, _react2.storiesOf)('Drop', module).add('Tooltip', function () {
  return /*#__PURE__*/_react["default"].createElement(TooltipDrop, null);
});