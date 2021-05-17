"use strict";

exports.__esModule = true;
exports.Tooltip = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Text = require("../Text");

var _Drop = require("../Drop");

var _StyledTooltip = require("./StyledTooltip");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tooltip = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      message = _ref.message,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? false : _ref$body,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'right' : _ref$position,
      title = _ref.title,
      _ref$showArrow = _ref.showArrow,
      showArrow = _ref$showArrow === void 0 ? true : _ref$showArrow,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "message", "body", "position", "title", "showArrow"]);

  var _useState = (0, _react.useState)(),
      over = _useState[0],
      setOver = _useState[1];

  var overRef = (0, _react.useRef)();

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var tooptip = theme.tooptip;

  var alignDrop = _extends({}, tooptip.dropProps);

  if (position === 'up') {
    alignDrop = {
      bottom: 'top'
    };
  }

  if (position === 'down') {
    alignDrop = {
      top: 'bottom'
    };
  }

  if (position === 'left') {
    alignDrop = {
      right: 'left'
    };
  }

  var timeOut = null;

  var showToolTip = function showToolTip(show, timer) {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    if (timer) {
      timeOut = setTimeout(function () {
        setOver(show);
      }, 50);
    } else {
      setOver(show);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({
    ref: ref
  }, rest), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    ref: overRef,
    onMouseOver: function onMouseOver() {
      return showToolTip(true);
    },
    onMouseOut: function onMouseOut() {
      return showToolTip(false, true);
    },
    onFocus: function onFocus() {},
    onBlur: function onBlur() {}
  }, children), overRef.current && over && /*#__PURE__*/_react["default"].createElement(_Drop.Drop, {
    direction: "row",
    onMouseOver: function onMouseOver() {
      return showToolTip(true);
    },
    onMouseOut: function onMouseOut() {
      return showToolTip(false, true);
    },
    align: alignDrop,
    target: overRef.current,
    elevation: "none",
    plain: true,
    style: {
      boxShadow: tooptip.boxShadow,
      maxWidth: tooptip.maxWidth
    }
  }, /*#__PURE__*/_react["default"].createElement(_StyledTooltip.ArrowWrap, {
    position: position,
    background: tooptip.background || 'dark-1'
  }, showArrow && /*#__PURE__*/_react["default"].createElement(_StyledTooltip.Arrow, {
    position: position
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    pad: tooptip.pad,
    background: tooptip.background || 'dark-1',
    round: tooptip.round
  }, body, !body && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, title && /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    color: tooptip.color
  }, tooptip.titleProps), title), /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    color: tooptip.color
  }, message))))));
});
exports.Tooltip = Tooltip;
Tooltip.displayName = 'Tooltip';