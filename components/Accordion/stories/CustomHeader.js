"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var renderPanelHeader = function renderPanelHeader(title, active) {
  return _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    align: "center",
    pad: "medium",
    gap: "small"
  }, _react["default"].createElement("strong", null, _react["default"].createElement(_mnetUiBase.Text, null, title)), _react["default"].createElement(_mnetUiBase.Text, {
    color: "brand"
  }, active ? '-' : '+'));
};

var CustomHeaderAccordion = function CustomHeaderAccordion() {
  var _useState = (0, _react.useState)([0]),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Accordion, {
    activeIndex: activeIndex,
    onActive: function onActive(newActiveIndex) {
      return setActiveIndex(newActiveIndex);
    }
  }, _react["default"].createElement(_mnetUiBase.AccordionPanel, {
    header: renderPanelHeader('Panel 1', activeIndex.includes(0))
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "light-2",
    style: {
      height: '800px'
    }
  }, _react["default"].createElement(_mnetUiBase.Text, null, "Panel 1 contents"), _react["default"].createElement(_mnetUiBase.TextInput, null))), _react["default"].createElement(_mnetUiBase.AccordionPanel, {
    header: renderPanelHeader('Panel 2', activeIndex.includes(1))
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "light-2",
    style: {
      height: '50px'
    }
  }, _react["default"].createElement(_mnetUiBase.Text, null, "Panel 2 contents"))), _react["default"].createElement(_mnetUiBase.AccordionPanel, {
    header: renderPanelHeader('Panel 3', activeIndex.includes(2))
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    background: "light-2",
    style: {
      height: '300px'
    }
  }, _react["default"].createElement(_mnetUiBase.Text, null, "Panel 3 contents")))));
};

(0, _react2.storiesOf)('Accordion', module).add('Custom Header', function () {
  return _react["default"].createElement(CustomHeaderAccordion, null);
});