"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _Basics = require("./Basics");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OnMoreInfiniteScroll = function OnMoreInfiniteScroll(_ref) {
  var props = _ref.props;

  var _useState = (0, _react.useState)(_Basics.allItems.slice(0, 50)),
      items = _useState[0],
      setItems = _useState[1];

  var onMore = function onMore() {
    setTimeout(function () {
      setItems(_Basics.allItems.slice(0, items.length + 50));
    }, 1000);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.InfiniteScroll, _extends({
    items: items,
    onMore: onMore
  }, props), function (item) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      key: item,
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, item));
  })));
};

(0, _react2.storiesOf)('InfiniteScroll', module).add('onMore', function () {
  return /*#__PURE__*/_react["default"].createElement(OnMoreInfiniteScroll, null);
}).add('onMore step', function () {
  return /*#__PURE__*/_react["default"].createElement(OnMoreInfiniteScroll, {
    step: 75
  });
});