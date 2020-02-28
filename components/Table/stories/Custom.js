"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var customTheme = {
  global: {
    font: {
      family: 'Helvetica'
    }
  },
  table: {
    body: {
      align: 'center',
      pad: {
        horizontal: 'large',
        vertical: 'xsmall'
      },
      border: 'horizontal'
    },
    extend: function extend() {
      return "font-family: Arial";
    },
    footer: {
      align: 'start',
      border: undefined,
      pad: {
        horizontal: 'large',
        vertical: 'small'
      },
      verticalAlign: 'bottom'
    },
    header: {
      align: 'center',
      border: 'bottom',
      fill: 'horizontal',
      pad: {
        horizontal: 'large',
        vertical: 'xsmall'
      },
      verticalAlign: 'bottom',
      background: {
        color: 'accent-1',
        opacity: 'strong'
      }
    }
  }
};

var CustomThemeTable = function CustomThemeTable() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Table, {
    caption: "Custom Theme Table"
  }, _react["default"].createElement(_mnetUiBase.TableHeader, null, _react["default"].createElement(_mnetUiBase.TableRow, null, _data.columns.map(function (c) {
    return _react["default"].createElement(_mnetUiBase.TableCell, {
      key: c.property,
      scope: "col",
      align: c.align
    }, _react["default"].createElement(_mnetUiBase.Text, null, c.label));
  }))), _react["default"].createElement(_mnetUiBase.TableBody, null, _data.data.map(function (datum) {
    return _react["default"].createElement(_mnetUiBase.TableRow, {
      key: datum.id
    }, _data.columns.map(function (c) {
      return _react["default"].createElement(_mnetUiBase.TableCell, {
        key: c.property,
        scope: c.dataScope,
        align: c.align
      }, _react["default"].createElement(_mnetUiBase.Text, null, c.format ? c.format(datum) : datum[c.property]));
    }));
  })), _react["default"].createElement(_mnetUiBase.TableFooter, null, _react["default"].createElement(_mnetUiBase.TableRow, null, _data.columns.map(function (c) {
    return _react["default"].createElement(_mnetUiBase.TableCell, {
      key: c.property,
      align: c.align
    }, _react["default"].createElement(_mnetUiBase.Text, null, c.footer));
  }))))));
};

(0, _react2.storiesOf)('Table', module).add('Custom', function () {
  return _react["default"].createElement(CustomThemeTable, null);
});