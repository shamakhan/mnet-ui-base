"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    basis: "small"
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: 3
  }, _react["default"].createElement(_mnetUiBase.Box, {
    gap: "small"
  }, _react["default"].createElement("strong", null, "InfiniteScroll embedded in a Table"), _react["default"].createElement(_mnetUiBase.Text, null, "Scroll down to load more data, open console to see loading info"))), _react["default"].createElement(_mnetUiBase.Table, null, _react["default"].createElement(_mnetUiBase.TableHeader, null, _react["default"].createElement(_mnetUiBase.TableRow, null, _react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Key"), _react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Cartoon"), _react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Movie"), _react["default"].createElement(_mnetUiBase.TableCell, {
    scope: "col",
    border: "bottom"
  }, "Year"))), _react["default"].createElement(_mnetUiBase.TableBody, null, _react["default"].createElement(_mnetUiBase.InfiniteScroll, {
    renderMarker: function renderMarker(marker) {
      return _react["default"].createElement(_mnetUiBase.TableRow, null, _react["default"].createElement(_mnetUiBase.TableCell, null, marker));
    },
    scrollableAncestor: "window",
    items: results,
    onMore: function onMore() {
      return load();
    },
    step: step
  }, function (result) {
    return _react["default"].createElement(_mnetUiBase.TableRow, {
      key: result
    }, _react["default"].createElement(_mnetUiBase.TableCell, null, result), _react["default"].createElement(_mnetUiBase.TableCell, null, "cartoon"), _react["default"].createElement(_mnetUiBase.TableCell, null, "movie name"), _react["default"].createElement(_mnetUiBase.TableCell, null, "year"));
  })))));
};

(0, _react2.storiesOf)('Table', module).add('InfiniteScroll', function () {
  return _react["default"].createElement(InfiniteScrollInTable, null);
}, {
  chromatic: {
    disable: true
  }
});