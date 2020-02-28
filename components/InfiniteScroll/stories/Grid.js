"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _Basics = require("./Basics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GridInfiniteScroll = function GridInfiniteScroll() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Grid, {
    columns: "xsmall",
    rows: "small"
  }, _react["default"].createElement(_mnetUiBase.InfiniteScroll, {
    items: _Basics.allItems,
    step: 12
  }, function (item) {
    return _react["default"].createElement(_mnetUiBase.Box, {
      key: item,
      as: "article",
      pad: "xsmall"
    }, _react["default"].createElement(_mnetUiBase.Image, {
      src: "https://via.placeholder.com/350x150"
    }), _react["default"].createElement(_mnetUiBase.Text, null, item));
  })));
};

(0, _react2.storiesOf)('InfiniteScroll', module).add('Grid', function () {
  return _react["default"].createElement(GridInfiniteScroll, null);
});