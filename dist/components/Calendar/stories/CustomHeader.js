"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _grommetIcons = require("grommet-icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CustomHeaderCalendar = function CustomHeaderCalendar() {
  var _useState = (0, _react.useState)(),
      date = _useState[0],
      setDate = _useState[1];

  var onSelect = function onSelect(nextDate) {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Calendar, {
    date: date,
    onSelect: onSelect,
    size: "small",
    bounds: ['2018-09-08', '2018-12-13'],
    header: function header(_ref) {
      var currentDate = _ref.date,
          locale = _ref.locale,
          onPreviousMonth = _ref.onPreviousMonth,
          onNextMonth = _ref.onNextMonth,
          previousInBound = _ref.previousInBound,
          nextInBound = _ref.nextInBound;
      return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
        direction: "row",
        align: "center",
        justify: "between"
      }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
        disabled: !previousInBound,
        onClick: onPreviousMonth
      }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormPreviousLink, null))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement("strong", null, currentDate.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      }))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
        disabled: !nextInBound,
        onClick: onNextMonth
      }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, null, /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormNextLink, null))));
    }
  })));
};

(0, _react2.storiesOf)('Calendar', module).add('Custom Header', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomHeaderCalendar, null);
});