"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _utils = require("../../../utils");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FakeRouter = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FakeRouter, _Component);

  function FakeRouter() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FakeRouter.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        push = _this$props.push,
        replace = _this$props.replace;
    return {
      router: {
        history: {
          push: push,
          replace: replace
        }
      }
    };
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react["default"].createElement("div", null, children);
  };

  return FakeRouter;
}(_react.Component);

_defineProperty(FakeRouter, "propTypes", {
  children: _propTypes["default"].node.isRequired,
  push: _propTypes["default"].func.isRequired,
  replace: _propTypes["default"].func.isRequired
});

_defineProperty(FakeRouter, "childContextTypes", {
  router: _propTypes["default"].shape({})
});

describe('RoutedButton', function () {
  var push = jest.fn();
  var replace = jest.fn();
  test('renders', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      path: "/"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('RoutedButton is clickable', function () {
    var preventDefault = jest.fn();
    var onClick = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      onClick: onClick,
      path: "/"
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(onClick).toBeCalled();
    expect(push).toBeCalled();
    expect(preventDefault).toBeCalled();
  });
  test('RoutedButton skips onClick if right clicked', function () {
    var onClick = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      onClick: onClick,
      path: "/"
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      ctrlKey: true
    });
    anchor[0].props.onClick({
      metaKey: true
    });
    expect(onClick).not.toBeCalled();
  });
  test('RoutedButton calls router context push', function () {
    var preventDefault = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      path: "/"
    }))));

    var tree = component.toJSON();
    var button = (0, _utils.findAllByType)(tree, 'a');
    button[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
    expect(push).toBeCalledWith('/');
  });
  test('RoutedButton calls router context replace', function () {
    var preventDefault = jest.fn();

    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(FakeRouter, {
      replace: replace,
      push: push
    }, /*#__PURE__*/_react["default"].createElement(_.RoutedButton, {
      label: "Test",
      path: "/",
      method: "replace"
    }))));

    var tree = component.toJSON();
    var button = (0, _utils.findAllByType)(tree, 'a');
    button[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
    expect(replace).toBeCalledWith('/');
  });
});