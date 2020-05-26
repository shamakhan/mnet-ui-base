"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Source code for the data can be found here
// https://github.com/mnet/grommet/blob/master/src/js/components/DataTable/stories/data.js
var columns = [{
  property: 'name',
  header: 'Name'
}, {
  property: 'location',
  header: 'Location'
}];

var Example = function Example() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.DataTable, {
    columns: columns,
    data: _data.DATA,
    step: 10,
    primaryKey: false
  })));
};

(0, _react2.storiesOf)('DataTable', module).add('No Primary', function () {
  return _react["default"].createElement(Example, null);
});