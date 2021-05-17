"use strict";

exports.__esModule = true;
exports.FormField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _defaultProps = require("../../default-props");

var _utils = require("../../utils");

var _Box = require("../Box");

var _CheckBox = require("../CheckBox");

var _CheckBoxGroup = require("../CheckBoxGroup");

var _RadioButtonGroup = require("../RadioButtonGroup");

var _Text = require("../Text");

var _TextInput = require("../TextInput");

var _FormContext = require("../Form/FormContext");

var _Tooltip = require("../Tooltip");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mnetInputNames = ['TextInput', 'Select', 'MaskedInput', 'TextArea'];
var mnetInputPadNames = ['CheckBox', 'CheckBoxGroup', 'RadioButtonGroup', 'RangeInput'];

var isMnetUIBaseInput = function isMnetUIBaseInput(comp) {
  return comp && (mnetInputNames.indexOf(comp.displayName) !== -1 || mnetInputPadNames.indexOf(comp.displayName) !== -1);
};

var FormFieldBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "FormField__FormFieldBox",
  componentId: "sc-13hlgkg-0"
})(["", " ", ""], function (props) {
  return props.focus && (0, _utils.focusStyle)({
    justBorder: true
  });
}, function (props) {
  return props.theme.formField && props.theme.formField.extend;
});
var FormFieldContentBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "FormField__FormFieldContentBox",
  componentId: "sc-13hlgkg-1"
})(["", " ", ""], function (props) {
  return props.focus && (0, _utils.focusStyle)({
    justBorder: true
  });
}, function (props) {
  return props.focus && props.plainOnFocus && "border-color: white;";
});

var Message = function Message(_ref) {
  var message = _ref.message,
      rest = _objectWithoutPropertiesLoose(_ref, ["message"]);

  if (message) {
    if (typeof message === 'string') return /*#__PURE__*/_react["default"].createElement(_Text.Text, rest, message);
    return /*#__PURE__*/_react["default"].createElement(_Box.Box, rest, message);
  }

  return null;
};

var FormField = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
      className = _ref2.className,
      component = _ref2.component,
      disabled = _ref2.disabled,
      error = _ref2.error,
      help = _ref2.help,
      htmlFor = _ref2.htmlFor,
      info = _ref2.info,
      label = _ref2.label,
      margin = _ref2.margin,
      name = _ref2.name,
      _onBlur = _ref2.onBlur,
      _onFocus = _ref2.onFocus,
      pad = _ref2.pad,
      required = _ref2.required,
      tooltip = _ref2.tooltip,
      style = _ref2.style,
      validate = _ref2.validate,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction,
      postfix = _ref2.postfix,
      prefix = _ref2.prefix,
      _ref2$labelWidth = _ref2.labelWidth,
      labelWidth = _ref2$labelWidth === void 0 ? 0 : _ref2$labelWidth,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 'auto' : _ref2$width,
      _ref2$showBorder = _ref2.showBorder,
      showBorder = _ref2$showBorder === void 0 ? true : _ref2$showBorder,
      plainOnFocus = _ref2.plainOnFocus,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "className", "component", "disabled", "error", "help", "htmlFor", "info", "label", "margin", "name", "onBlur", "onFocus", "pad", "required", "tooltip", "style", "validate", "direction", "postfix", "prefix", "labelWidth", "width", "showBorder", "plainOnFocus"]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var context = (0, _react.useContext)(_FormContext.FormContext);
  (0, _react.useEffect)(function () {
    if (context && context.addValidation) {
      var addValidation = context.addValidation,
          messages = context.messages,
          removeValidation = context.removeValidation;

      var validateSingle = function validateSingle(aValidate, value2, data) {
        var result;

        if (typeof aValidate === 'function') {
          result = aValidate(value2, data);
        } else if (validate.regexp) {
          if (!validate.regexp.test(value2)) {
            result = validate.message || messages.invalid;

            if (validate.status) {
              result = {
                message: error,
                status: validate.status
              };
            }
          }
        }

        return result;
      };

      var validateField = function validateField(value2, data) {
        var result;

        if (required && ( // false is for CheckBox
        value2 === undefined || value2 === '' || value2 === false)) {
          result = messages.required;
        } else if (validate) {
          if (Array.isArray(validate)) {
            validate.some(function (aValidate) {
              result = validateSingle(aValidate, value2, data);
              return !!result;
            });
          } else {
            result = validateSingle(validate, value2, data);
          }
        }

        return result;
      };

      if (validate || required) {
        addValidation(name, validateField);
        return function () {
          return removeValidation(name, validateField);
        };
      }

      removeValidation(name, validateField);
    }

    return undefined;
  }, [context, error, name, required, validate]);

  var _useState = (0, _react.useState)(),
      focus = _useState[0],
      setFocus = _useState[1];

  var renderInput = function renderInput(formValue, invalid) {
    var Input = component || _TextInput.TextInput;

    if (Input === _CheckBox.CheckBox) {
      return /*#__PURE__*/_react["default"].createElement(Input, _extends({
        name: name,
        label: label,
        disabled: disabled,
        "aria-invalid": invalid || undefined
      }, rest));
    }

    return /*#__PURE__*/_react["default"].createElement(Input, _extends({
      name: name,
      value: !isMnetUIBaseInput(component) ? formValue[name] : undefined,
      disabled: disabled,
      plain: true,
      focusIndicator: false,
      "aria-invalid": invalid || undefined
    }, rest, {
      onChange: // MnetUIBase input components already check for FormContext
      // and, using their `name`, end up calling the context.update()
      // already. For custom components, we expect they will call
      // this onChange() and we'll call context.update() here, primarily
      // for backwards compatibility.
      isMnetUIBaseInput(component) ? rest.onChange : function (event) {
        context.update(name, event.target.value);
        if (rest.onChange) rest.onChange(event);
      }
    }));
  };

  var formFieldTheme = theme.formField;
  var themeBorder = formFieldTheme.border; // This is here for backwards compatibility. In case the child is a mnet
  // input component, set plain and focusIndicator props, if they aren't
  // already set.

  var wantContentPad = component && (component === _CheckBox.CheckBox || component === _CheckBoxGroup.CheckBoxGroup || component === _RadioButtonGroup.RadioButtonGroup);
  var contents = themeBorder && children && _react.Children.map(children, function (child) {
    if (child && child.type && mnetInputPadNames.indexOf(child.type.displayName) !== -1) {
      wantContentPad = true;
    }

    if (child && child.type && mnetInputNames.indexOf(child.type.displayName) !== -1 && child.props.plain === undefined && child.props.focusIndicator === undefined) {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        plain: true,
        focusIndicator: false
      });
    }

    return child;
  }) || children;
  var normalizedError = error;
  var normalizedInfo = info;
  var onFieldBlur; // put rest on container, unless we use renderInput()

  var containerRest = rest;

  if (context && context.addValidation) {
    var errors = context.errors,
        infos = context.infos,
        onContextBlur = context.onBlur,
        formValue = context.value;
    normalizedError = error || errors[name];
    normalizedInfo = info || infos[name];
    if (!contents) containerRest = {};
    contents = contents || renderInput(formValue, !!normalizedError);

    if (onContextBlur) {
      onFieldBlur = function onFieldBlur() {
        return onContextBlur(name);
      };
    }
  }

  var contentProps = pad || wantContentPad ? _extends({}, formFieldTheme.content) : {};

  if (themeBorder.position === 'inner') {
    if (normalizedError && formFieldTheme.error) {
      contentProps.background = formFieldTheme.error.background;
    } else if (disabled && formFieldTheme.disabled) {
      contentProps.background = formFieldTheme.disabled.background;
    }
  }

  contents = /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, contentProps, {
    width: width
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, prefix && /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, formFieldTheme.prefix, {
    style: {
      wordBreak: 'normal'
    }
  }), prefix), contents, postfix && /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, formFieldTheme.postfix, {
    style: {
      wordBreak: 'normal'
    }
  }), postfix)));
  var borderColor;

  if (disabled && formFieldTheme.disabled.border && formFieldTheme.disabled.border.color) {
    borderColor = formFieldTheme.disabled.border.color;
  } else if (normalizedError && themeBorder && themeBorder.error.color) {
    borderColor = themeBorder.error.color || 'status-critical';
  } else if (focus && formFieldTheme.focus && formFieldTheme.focus.border && formFieldTheme.focus.border.color) {
    borderColor = formFieldTheme.focus.border.color;
  } else {
    borderColor = themeBorder && themeBorder.color || 'border';
  }

  var labelStyle = _extends({}, formFieldTheme.labelWrap);

  if (disabled) {
    labelStyle.color = formFieldTheme.disabled && formFieldTheme.disabled.label ? formFieldTheme.disabled.label.color : labelStyle.color;
  }

  var abut;
  var abutMargin;
  var outerStyle = style;

  if (themeBorder) {
    var innerProps = themeBorder.position === 'inner' ? {
      border: [_extends({}, themeBorder, {
        side: themeBorder.side || 'bottom',
        color: borderColor
      })],
      round: formFieldTheme.round,
      focus: focus
    } : {};

    if (!error && innerProps.border) {
      innerProps.border.push(_extends({}, themeBorder, {
        side: 'bottom',
        color: borderColor,
        size: 'small'
      }));
    }

    contents = /*#__PURE__*/_react["default"].createElement(FormFieldContentBox, _extends({
      overflow: "hidden"
    }, showBorder && innerProps, {
      plainOnFocus: plainOnFocus
    }), contents);
    var mergedMargin = margin || formFieldTheme.margin;
    abut = themeBorder.position === 'outer' && (themeBorder.side === 'all' || themeBorder.side === 'horizontal' || !themeBorder.side) && !(mergedMargin && (typeof mergedMargin === 'string' && mergedMargin !== 'none' || mergedMargin.bottom && mergedMargin.bottom !== 'none' || mergedMargin.horizontal && mergedMargin.horizontal !== 'none'));

    if (abut) {
      // marginBottom is set to overlap adjacent fields
      abutMargin = {
        bottom: '-1px'
      };

      if (margin) {
        abutMargin = margin;
      } else if (themeBorder.size) {
        // if the user defines a margin,
        // then the default margin below will be overridden
        abutMargin = {
          bottom: "-" + (0, _utils.parseMetricToNum)(theme.global.borderSize[themeBorder.size] || themeBorder.size) + "px"
        };
      }

      outerStyle = _extends({
        position: focus ? 'relative' : undefined,
        zIndex: focus ? 10 : undefined
      }, style);
    }
  }

  var outerBackground;

  if (themeBorder.position === 'outer') {
    if (normalizedError && formFieldTheme.error && formFieldTheme.error.background) {
      outerBackground = formFieldTheme.error.background;
    } else if (focus && formFieldTheme.focus && formFieldTheme.focus.background && formFieldTheme.focus.background.color) {
      outerBackground = formFieldTheme.focus.background.color;
    } else if (disabled && formFieldTheme.disabled && formFieldTheme.disabled.background) {
      outerBackground = formFieldTheme.disabled.background;
    }
  }

  var layoutType = direction && direction === 'row' ? {
    flexDirection: direction,
    alignItems: 'center'
  } : {
    flexDirection: direction
  };
  var outerProps = themeBorder && themeBorder.position === 'outer' ? {
    border: _extends({}, themeBorder, {
      color: borderColor
    }),
    round: formFieldTheme.round,
    focus: focus
  } : {};
  var ToolTipIcon = formFieldTheme.tooltip.icon;
  return /*#__PURE__*/_react["default"].createElement(FormFieldBox, _extends({
    ref: ref,
    className: className,
    background: outerBackground,
    margin: abut ? abutMargin : margin || _extends({}, formFieldTheme.margin)
  }, outerProps, {
    style: outerStyle,
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (onFieldBlur) onFieldBlur(event);
      if (_onBlur) _onBlur(event);
    }
  }, containerRest), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    style: _extends({}, layoutType)
  }, label && component !== _CheckBox.CheckBox || labelWidth ? /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, labelStyle, {
    width: labelWidth
  }), label && component !== _CheckBox.CheckBox && /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    as: "label",
    htmlFor: htmlFor
  }, formFieldTheme.label), label), required && /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    color: "status-critical"
  }, "*"), typeof tooltip === 'object' && tooltip != null && /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({}, tooltip, formFieldTheme.tooltip.extend), /*#__PURE__*/_react["default"].createElement(ToolTipIcon, formFieldTheme.tooltip.iconProps))) : null, /*#__PURE__*/_react["default"].createElement(_Box.Box, null, contents, normalizedError && /*#__PURE__*/_react["default"].createElement(_Box.Box, null, /*#__PURE__*/_react["default"].createElement(Message, _extends({
    message: normalizedError
  }, formFieldTheme.error, {
    style: {
      position: "" + (direction === 'row' ? 'absolute' : 'static')
    }
  }))), normalizedInfo && /*#__PURE__*/_react["default"].createElement(Message, _extends({
    message: normalizedInfo
  }, formFieldTheme.info)))));
});
FormField.displayName = 'FormField';
var FormFieldDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  FormFieldDoc = require('./doc').doc(FormField);
}

var FormFieldWrapper = FormFieldDoc || FormField;
exports.FormField = FormFieldWrapper;