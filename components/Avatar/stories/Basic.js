"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Basic = function Basic() {
  var src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    justify: "center",
    direction: "row",
    gap: "small",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Avatar, {
    src: src
  }), _react["default"].createElement(_mnetUiBase.Avatar, {
    background: "accent-4"
  }, _react["default"].createElement(_grommetIcons.Favorite, {
    color: "accent-2"
  })), _react["default"].createElement(_mnetUiBase.Avatar, {
    background: "dark-2"
  }, "R"), _react["default"].createElement(_mnetUiBase.Avatar, {
    background: "brand"
  }, "SY")));
};

(0, _react2.storiesOf)('Avatar', module).add('Basic', function () {
  return _react["default"].createElement(Basic, null);
});