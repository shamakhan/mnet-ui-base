"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MultipleDrop = function MultipleDrop() {
  var _useState = (0, _react.useState)(false),
      showDrop = _useState[0],
      setShowDrop = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      showLayer = _useState2[0],
      setShowLayer = _useState2[1];

  var targetRef = (0, _react.useRef)();
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
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.DropButton, {
    label: "drop button",
    dropAlign: {
      right: 'left'
    },
    dropContent: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      pad: "large"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
      value: "",
      onChange: function onChange() {},
      suggestions: ['one', 'two']
    }))
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    ref: targetRef,
    label: "button",
    onClick: function onClick() {
      return setShowDrop(true);
    }
  }), showDrop && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Drop, {
    align: {
      left: 'right'
    },
    target: targetRef.current,
    onClickOutside: function onClickOutside() {
      return setShowDrop(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    value: "",
    onChange: function onChange() {},
    suggestions: ['one', 'two']
  }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
    label: "layer",
    onClick: function onClick() {
      return setShowLayer(!showLayer);
    }
  }), showLayer && /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Layer, {
    position: "left",
    modal: false
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "large",
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    value: "",
    onChange: function onChange() {},
    suggestions: ['one', 'two']
  })))));
};

(0, _react2.storiesOf)('Drop', module).add('Multiple', function () {
  return /*#__PURE__*/_react["default"].createElement(MultipleDrop, null);
});