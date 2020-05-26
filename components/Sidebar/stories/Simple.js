"use strict";

exports.__esModule = true;
exports.SidebarIcons = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SidebarHeader = function SidebarHeader() {
  return _react["default"].createElement(_mnetUiBase.Avatar, {
    border: {
      size: 'small',
      color: 'accent-2'
    },
    background: "white"
  }, "SY");
};

var SidebarFooter = function SidebarFooter() {
  return _react["default"].createElement(_mnetUiBase.Nav, {
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Chat, null),
    hoverIndicator: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Help, null),
    hoverIndicator: true
  }));
};

var MainNavigation = function MainNavigation() {
  return _react["default"].createElement(_mnetUiBase.Nav, {
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.StatusInfoSmall, null),
    hoverIndicator: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Projects, null),
    hoverIndicator: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Clock, null),
    hoverIndicator: true
  }), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    border: {
      color: 'white',
      side: 'bottom'
    },
    hoverIndicator: true
  }), _react["default"].createElement(_mnetUiBase.Box, {
    gap: "small",
    pad: {
      vertical: 'medium'
    },
    hoverIndicator: true
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Analytics, null),
    hoverIndicator: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Configure, null),
    hoverIndicator: true
  })));
};

var SidebarIcons = function SidebarIcons() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    full: true
  }, _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    height: {
      min: '100%'
    }
  }, _react["default"].createElement(_mnetUiBase.Sidebar, {
    background: "accent-1",
    header: _react["default"].createElement(SidebarHeader, null),
    footer: _react["default"].createElement(SidebarFooter, null)
  }, _react["default"].createElement(MainNavigation, null))));
};

exports.SidebarIcons = SidebarIcons;
(0, _react2.storiesOf)('Sidebar', module).add('Icons', function () {
  return _react["default"].createElement(SidebarIcons, null);
});