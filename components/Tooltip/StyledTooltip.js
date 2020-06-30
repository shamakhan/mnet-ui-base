"use strict";

exports.__esModule = true;
exports.ArrowWrap = exports.Arrow = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = require("../Box");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ArrowStyle = function ArrowStyle(props) {
  var position = props.position;

  var _backgroundStyle = (0, _utils.backgroundStyle)((0, _utils.normalizeColor)(props.theme.tooptip && props.theme.tooptip.background || 'dark-1', props.theme), props.theme),
      tipColor = _backgroundStyle[1];

  if (position === 'up') {
    return (0, _styledComponents.css)(["border-left:solid transparent;border-right:solid transparent;border-top:solid ", ";"], tipColor);
  }

  if (position === 'down') {
    return (0, _styledComponents.css)(["border-left:solid transparent;border-right:solid transparent;border-bottom:solid ", ";"], tipColor);
  }

  if (position === 'left') {
    return (0, _styledComponents.css)(["border-top:solid transparent;border-bottom:solid transparent;border-left:solid ", ";"], tipColor);
  }

  return (0, _styledComponents.css)(["border-top:solid transparent;border-bottom:solid transparent;border-right:solid ", ";"], tipColor);
};

var Arrow = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledTooltip__Arrow",
  componentId: "sc-7ieemc-0"
})(["width:0;height:0;", " border-width:", ";"], function (props) {
  return ArrowStyle(props);
}, function (props) {
  return props.theme.tooptip.tipSize || '5px';
});
exports.Arrow = Arrow;

var Alignment = function Alignment(props) {
  var position = props.position;

  if (position === 'up') {
    return (0, _styledComponents.css)(["flex-direction:column-reverse;align-items:center;"]);
  }

  if (position === 'down') {
    return (0, _styledComponents.css)(["flex-direction:column;align-items:center;"]);
  }

  if (position === 'left') {
    return (0, _styledComponents.css)(["flex-direction:row-reverse;align-items:center;"]);
  }

  return (0, _styledComponents.css)(["flex-direction:row;align-items:center;"]);
};

var ArrowWrap = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledTooltip__ArrowWrap",
  componentId: "sc-7ieemc-1"
})(["", ""], function (props) {
  return Alignment(props);
});
exports.ArrowWrap = ArrowWrap;