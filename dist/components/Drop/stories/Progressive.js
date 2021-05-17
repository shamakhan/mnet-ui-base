"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProgressiveDrop = function ProgressiveDrop() {
  var boxRef = (0, _react.useRef)();
  var innerBoxRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      openDrop = _useState[0],
      setOpenDrop = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      openInnerDrop = _useState2[0],
      setOpenInnerDrop = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      interactedWithInnerButton = _useState3[0],
      setInteractedWithInnerButton = _useState3[1];

  var onCloseDrop = function onCloseDrop() {
    setOpenDrop(false);
    setOpenInnerDrop(false);
  };

  var onOpenDrop = function onOpenDrop() {
    setOpenDrop(true);
    setOpenInnerDrop(false);
  };

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
    ref: boxRef,
    primary: true,
    label: "Click me",
    onClick: onOpenDrop
  }), openDrop && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Drop, {
    target: boxRef.current,
    onClickOutside: onCloseDrop,
    onEsc: onCloseDrop
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    ref: innerBoxRef
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: "Click me again",
    onClick: function onClick() {
      return setOpenInnerDrop(true);
    }
  })), openInnerDrop && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Drop, {
    target: innerBoxRef.current,
    onClickOutside: function onClickOutside() {
      return setOpenInnerDrop(false);
    },
    onEsc: function onEsc() {
      return setOpenInnerDrop(false);
    },
    align: {
      top: 'bottom',
      right: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    primary: true,
    label: interactedWithInnerButton ? 'Good job!' : 'You can interact with me',
    onClick: function onClick() {
      return setInteractedWithInnerButton(true);
    }
  }))))));
};

(0, _react2.storiesOf)('Drop', module).add('Progressive', function () {
  return /*#__PURE__*/_react["default"].createElement(ProgressiveDrop, null);
});