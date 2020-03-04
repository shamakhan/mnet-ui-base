"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _Simple = require("../../Header/stories/Simple");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var items = [{
  label: 'HTML',
  href: '#'
}, {
  label: 'JS',
  href: '#'
}, {
  label: 'CSS',
  href: '#'
}, {
  label: 'REACT',
  href: '#'
}];

var OnHeader = function OnHeader() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Header, {
    background: "dark-1",
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    gap: "small"
  }, _react["default"].createElement(_Simple.Avatar, null), _react["default"].createElement(_mnetUiBase.Anchor, {
    color: "white",
    href: "https://github.com/ShimiSun"
  }, "ShimiSun")), _react["default"].createElement(_mnetUiBase.Nav, {
    direction: "row"
  }, items.map(function (item) {
    return _react["default"].createElement(_mnetUiBase.Anchor, {
      href: item.href,
      label: item.label,
      key: item.label
    });
  }))));
};

(0, _react2.storiesOf)('Nav', module).add('On Header', function () {
  return _react["default"].createElement(OnHeader, null);
});