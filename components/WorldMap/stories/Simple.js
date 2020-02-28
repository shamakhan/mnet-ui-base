"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SimpleWorldMap = function SimpleWorldMap() {
  var _React$useState = _react["default"].useState(),
      places = _React$useState[0],
      setPlaces = _React$useState[1];

  var onSelectPlace = function onSelectPlace(place) {
    setPlaces([{
      color: 'accent-1',
      location: place
    }]);
  };

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.WorldMap, {
    onSelectPlace: onSelectPlace,
    places: places
  })));
};

(0, _react2.storiesOf)('WorldMap', module).add('Simple', function () {
  return _react["default"].createElement(SimpleWorldMap, null);
});