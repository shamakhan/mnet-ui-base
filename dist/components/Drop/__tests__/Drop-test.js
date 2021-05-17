"use strict";

var _react = _interopRequireWildcard(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _portal = require("../../../utils/portal");

var _MnetUIBase = require("../../MnetUIBase");

var _ = require("..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customTheme = {
  global: {
    drop: {
      shadowSize: 'large'
    }
  }
};

var TestInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TestInput, _Component);

  function TestInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      showDrop: false
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", /*#__PURE__*/_react["default"].createRef());

    return _this;
  }

  var _proto = TestInput.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      showDrop: true
    }); // eslint-disable-line
  };

  _proto.render = function render() {
    var _this$props = this.props,
        inputProps = _this$props.inputProps,
        theme = _this$props.theme,
        elevation = _this$props.elevation,
        containerTarget = _this$props.containerTarget,
        rest = _objectWithoutPropertiesLoose(_this$props, ["inputProps", "theme", "elevation", "containerTarget"]);

    var showDrop = this.state.showDrop;
    var drop;

    if (showDrop) {
      drop = /*#__PURE__*/_react["default"].createElement(_.Drop, _extends({
        id: "drop-node",
        elevation: elevation,
        target: this.inputRef.current
      }, rest), "this is a test");
    }

    return /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, {
      theme: theme,
      containerTarget: containerTarget
    }, /*#__PURE__*/_react["default"].createElement("input", _extends({
      ref: this.inputRef
    }, inputProps)), drop);
  };

  return TestInput;
}(_react.Component);

describe('Drop', function () {
  afterEach(_react2.cleanup);
  test('basic', function () {
    window.scrollTo = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align left right top bottom', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        left: 'right',
        top: 'bottom'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right bottom top', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'right',
        bottom: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align left left', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        left: 'left',
        bottom: 'bottom'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right left top top', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'left',
        top: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right bottom top', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'right',
        bottom: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        right: 'right'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('invalid align', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      align: {
        whatever: 'right'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('no stretch', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      stretch: false
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('close', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _react2.cleanup)();
    expect(document.getElementById('drop-node')).toBeNull();
  });
  test('invoke onClickOutside', function () {
    var onClickOutside = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      onClickOutside: onClickOutside
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _react2.fireEvent)(document, new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    }));
    expect(onClickOutside).toBeCalled();
  });
  test('resize', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    global.window.innerWidth = 1000;
    global.window.innerHeight = 1000;
    (0, _react2.fireEvent)(window, new Event('resize', {
      bubbles: true,
      cancelable: true
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('restrict focus', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      restrictFocus: true
    }));
    expect(document.activeElement).toMatchSnapshot();
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _react2.cleanup)();
    expect(document.activeElement).toMatchSnapshot();
  });
  test('default elevation renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('theme elevation renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      theme: customTheme
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('props elevation renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      theme: customTheme,
      elevation: "medium"
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('plain renders', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      plain: true
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('default containerTarget', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
      "data-testid": "drop"
    })),
        getByTestId = _render.getByTestId;

    var actualRoot = getByTestId('drop').parentNode.parentNode.parentNode;
    expect(actualRoot).toBe(document.body);
  });
  test('custom containerTarget', function () {
    var target = document.createElement('div');
    document.body.appendChild(target);

    try {
      var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(TestInput, {
        "data-testid": "drop",
        containerTarget: target
      })),
          getByTestId = _render2.getByTestId;

      var actualRoot = getByTestId('drop').parentNode.parentNode.parentNode;
      expect(actualRoot).toBe(target);
    } finally {
      document.body.removeChild(target);
    }
  });
});