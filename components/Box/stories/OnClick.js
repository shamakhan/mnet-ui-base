"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("../../../themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OnClickBox = function OnClickBox() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    justify: "center",
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    pad: "large",
    align: "center",
    round: true,
    gap: "small",
    hoverIndicator: true,
    onClick: function onClick() {
      alert('clicked');
    }
  }, _react["default"].createElement(_grommetIcons.Attraction, {
    size: "large"
  }), _react["default"].createElement(_mnetUiBase.Text, null, "Party"))));
};

(0, _react2.storiesOf)('Box', module).add('onClick', function () {
  return _react["default"].createElement(OnClickBox, null);
});