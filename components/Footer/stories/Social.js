"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Media = function Media() {
  return _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    gap: "xxsmall",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Anchor, {
    a11yTitle: "Share feedback on Github",
    href: "https://www.instagram.com/",
    icon: _react["default"].createElement(_grommetIcons.Instagram, {
      color: "brand"
    })
  }), _react["default"].createElement(_mnetUiBase.Anchor, {
    a11yTitle: "Chat with us on Slack",
    href: "https://www.facebook.com/",
    icon: _react["default"].createElement(_grommetIcons.FacebookOption, {
      color: "brand"
    })
  }), _react["default"].createElement(_mnetUiBase.Anchor, {
    a11yTitle: "Follow us on Twitter",
    href: "https://twitter.com/",
    icon: _react["default"].createElement(_grommetIcons.Twitter, {
      color: "brand"
    })
  }));
};

var Social = function Social() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet
  }, _react["default"].createElement(_mnetUiBase.Main, {
    background: "light-2",
    elevation: "large",
    pad: "medium",
    gap: "large"
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "small",
    size: "xsmall"
  }, "Main Content"), _react["default"].createElement(_mnetUiBase.Box, {
    flex: true
  })), _react["default"].createElement(_mnetUiBase.Footer, {
    background: "light-4",
    pad: "small"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    direction: "row",
    gap: "xsmall"
  }, _react["default"].createElement(_grommetIcons.MnetUIBase, {
    color: "brand",
    size: "medium"
  }), _react["default"].createElement(_mnetUiBase.Text, {
    alignSelf: "center",
    color: "brand",
    size: "small"
  }, "MnetUIBase")), _react["default"].createElement(Media, null), _react["default"].createElement(_mnetUiBase.Text, {
    textAlign: "center",
    size: "xsmall"
  }, "\xA9Copyright")));
};

(0, _react2.storiesOf)('Footer', module).add('Social', function () {
  return _react["default"].createElement(Social, null);
});