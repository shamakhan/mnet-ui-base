"use strict";

exports.__esModule = true;
exports.allItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var allItems = Array(2000).fill().map(function (_, i) {
  return "item " + (i + 1);
});
exports.allItems = allItems;

var SimpleInfiniteScroll = function SimpleInfiniteScroll(props) {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return _react["default"].createElement(_mnetUiBase.Box, {
      key: item,
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, _react["default"].createElement(_mnetUiBase.Text, null, item));
  })));
};

(0, _react2.storiesOf)('InfiniteScroll', module).add('Simple', function () {
  return _react["default"].createElement(SimpleInfiniteScroll, null);
}).add('Show 118th item', function () {
  return _react["default"].createElement(SimpleInfiniteScroll, {
    show: 117
  });
}).add('Marker', function () {
  return _react["default"].createElement(SimpleInfiniteScroll, {
    renderMarker: function renderMarker(marker) {
      return _react["default"].createElement(_mnetUiBase.Box, {
        pad: "medium",
        background: "accent-1"
      }, marker);
    }
  });
});