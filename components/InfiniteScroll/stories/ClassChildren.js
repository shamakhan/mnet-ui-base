"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _Basics = require("./Basics");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */
var MyItem =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MyItem, _Component);

  function MyItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MyItem.prototype;

  _proto.render = function render() {
    var item = this.props.item;
    return _react["default"].createElement(_mnetUiBase.Box, {
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, _react["default"].createElement(_mnetUiBase.Text, null, item));
  };

  return MyItem;
}(_react.Component);

var ClassChildrenInfiniteScroll = function ClassChildrenInfiniteScroll(props) {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.InfiniteScroll, _extends({
    items: _Basics.allItems
  }, props), function (item) {
    return _react["default"].createElement(MyItem, {
      key: item,
      item: item
    });
  })));
};

(0, _react2.storiesOf)('InfiniteScroll', module).add('Class Children', function () {
  return _react["default"].createElement(ClassChildrenInfiniteScroll, null);
});