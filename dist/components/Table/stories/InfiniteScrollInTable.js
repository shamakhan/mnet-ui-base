"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var InfiniteScrollInTable = function InfiniteScrollInTable() {
  var step = 25;

  var _useState = (0, _react.useState)(Array.from({
    length: 50
  }, function () {
    return Math.floor(Math.random() * 1000000);
  })),
      results = _useState[0],
      setResults = _useState[1];

  var load = function load() {
    console.log("InfiniteScroll fires onMore after loading " + step + " items");
    setResults([].concat(results, Array.from({
      length: 50
    }, function () {
      return Math.floor(Math.random() * 1000000);
    })));
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    basis: "small"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: 3
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "small"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "InfiniteScroll embedded in a Table"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "Scroll down to load more data, open console to see loading info"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Table, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableHeader, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Key"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Cartoon"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Movie"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Year"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableBody, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.InfiniteScroll, {
    renderMarker: function renderMarker(marker) {
      return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, marker));
    },
    scrollableAncestor: "window",
    items: results,
    onMore: function onMore() {
      return load();
    },
    step: step
  }, function (result) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableRow, {
      key: result
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, result), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, "cartoon"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, "movie name"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TableCell, null, "year"));
  })))));
};

(0, _react2.storiesOf)('Table', module).add('InfiniteScroll', function () {
  return /*#__PURE__*/_react["default"].createElement(InfiniteScrollInTable, null);
}, {
  chromatic: {
    disable: true
  }
});