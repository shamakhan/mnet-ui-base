"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AppGrid = function AppGrid() {
  var _useState = (0, _react.useState)(true),
      sidebar = _useState[0],
      setSidebar = _useState[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    full: true,
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Grid, {
    fill: true,
    rows: ['auto', 'flex'],
    columns: ['auto', 'flex'],
    areas: [{
      name: 'header',
      start: [0, 0],
      end: [1, 0]
    }, {
      name: 'sidebar',
      start: [0, 1],
      end: [0, 1]
    }, {
      name: 'main',
      start: [1, 1],
      end: [1, 1]
    }]
  }, _react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "header",
    direction: "row",
    align: "center",
    justify: "between",
    pad: {
      horizontal: 'medium',
      vertical: 'small'
    },
    background: "dark-2"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    onClick: function onClick() {
      return setSidebar(!sidebar);
    }
  }, _react["default"].createElement(_mnetUiBase.Text, {
    size: "large"
  }, "Title")), _react["default"].createElement(_mnetUiBase.Text, null, "my@email")), sidebar && _react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "sidebar",
    background: "dark-3",
    width: "small",
    animation: [{
      type: 'fadeIn',
      duration: 300
    }, {
      type: 'slideRight',
      size: 'xlarge',
      duration: 150
    }]
  }, ['First', 'Second', 'Third'].map(function (name) {
    return _react["default"].createElement(_mnetUiBase.Button, {
      key: name,
      href: "#",
      hoverIndicator: true
    }, _react["default"].createElement(_mnetUiBase.Box, {
      pad: {
        horizontal: 'medium',
        vertical: 'small'
      }
    }, _react["default"].createElement(_mnetUiBase.Text, null, name)));
  })), _react["default"].createElement(_mnetUiBase.Box, {
    gridArea: "main",
    justify: "center",
    align: "center"
  }, _react["default"].createElement(_mnetUiBase.Text, null, "main"))));
};

(0, _react2.storiesOf)('Grid', module).add('App', function () {
  return _react["default"].createElement(AppGrid, null);
});