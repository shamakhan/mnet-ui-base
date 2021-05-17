"use strict";

exports.__esModule = true;
exports.SelectContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Button = require("../Button");

var _InfiniteScroll = require("../InfiniteScroll");

var _Keyboard = require("../Keyboard");

var _Text = require("../Text");

var _TextInput = require("../TextInput");

var _StyledSelect = require("./StyledSelect");

var _utils2 = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// position relative is so scroll can be managed correctly
var OptionsBox = _styledComponents["default"].div.withConfig({
  displayName: "SelectContainer__OptionsBox",
  componentId: "sc-64fnsh-0"
})(["position:relative;scroll-behavior:smooth;overflow:auto;"]);

var OptionBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "SelectContainer__OptionBox",
  componentId: "sc-64fnsh-1"
})(["", ""], function (props) {
  return props.selected && _utils.selectedStyle;
});
var SelectOption = (0, _styledComponents["default"])(_Button.Button).withConfig({
  displayName: "SelectContainer__SelectOption",
  componentId: "sc-64fnsh-2"
})(["display:block;width:100%;background:", ";"], function (props) {
  return props.active ? props.theme.select.activeColor : 'transparent';
});
var SelectContainer = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      disabled = _ref.disabled,
      disabledKey = _ref.disabledKey,
      dropHeight = _ref.dropHeight,
      _ref$emptySearchMessa = _ref.emptySearchMessage,
      emptySearchMessage = _ref$emptySearchMessa === void 0 ? 'No matches found' : _ref$emptySearchMessa,
      id = _ref.id,
      labelKey = _ref.labelKey,
      multiple = _ref.multiple,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      onMore = _ref.onMore,
      onSearch = _ref.onSearch,
      optionIndexesInValue = _ref.optionIndexesInValue,
      options = _ref.options,
      searchPlaceholder = _ref.searchPlaceholder,
      selected = _ref.selected,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      valueKey = _ref.valueKey,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? true : _ref$replace,
      customSearch = _ref.customSearch,
      renderOptionTop = _ref.renderOptionTop,
      renderOptionBottom = _ref.renderOptionBottom,
      renderCustomContent = _ref.renderCustomContent;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var _useState = (0, _react.useState)(),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = (0, _react.useState)(-1),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      keyboardNavigation = _useState3[0],
      setKeyboardNavigation = _useState3[1];

  var searchRef = (0, _react.useRef)();
  var optionsRef = (0, _react.useRef)(); // adjust activeIndex when options change

  (0, _react.useEffect)(function () {
    if (onSearch) {
      if (activeIndex === -1 && !search && options && optionIndexesInValue) {
        var nextActiveIndex = optionIndexesInValue.length ? optionIndexesInValue[0] : -1;
        setActiveIndex(nextActiveIndex);
      } else if (activeIndex === -1 && search) {
        setActiveIndex(0);
      }
    }
  }, [activeIndex, optionIndexesInValue, options, onSearch, search]); // set initial focus

  (0, _react.useEffect)(function () {
    // need to wait for Drop to be ready
    var timer = setTimeout(function () {
      var optionsNode = optionsRef.current;

      if (onSearch) {
        var searchInput = searchRef.current;

        if (searchInput && searchInput.focus) {
          (0, _utils.setFocusWithoutScroll)(searchInput);
        }
      } else if (optionsNode) {
        (0, _utils.setFocusWithoutScroll)(optionsNode);
      }
    }, 100);
    return function () {
      return clearTimeout(timer);
    };
  }, [onSearch]); // clear keyboardNavigation after a while

  (0, _react.useEffect)(function () {
    if (keyboardNavigation) {
      // 100ms was empirically determined
      var timer = setTimeout(function () {
        return setKeyboardNavigation(false);
      }, 100);
      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, [keyboardNavigation]);
  var optionLabel = (0, _react.useCallback)(function (index) {
    return (0, _utils2.applyKey)(options[index], labelKey);
  }, [labelKey, options]);
  var optionValue = (0, _react.useCallback)(function (index) {
    return (0, _utils2.applyKey)(options[index], valueKey);
  }, [options, valueKey]);
  var isDisabled = (0, _react.useCallback)(function (index) {
    var option = options[index];
    var result;

    if (disabledKey) {
      result = (0, _utils2.applyKey)(option, disabledKey);
    } else if (Array.isArray(disabled)) {
      if (typeof disabled[0] === 'number') {
        result = disabled.indexOf(index) !== -1;
      } else {
        var optionVal = optionValue(index);
        result = disabled.indexOf(optionVal) !== -1;
      }
    }

    return result;
  }, [disabled, disabledKey, options, optionValue]);
  var isSelected = (0, _react.useCallback)(function (index) {
    var result;

    if (selected) {
      // deprecated in favor of value
      result = selected.indexOf(index) !== -1;
    } else {
      var optionVal = optionValue(index);

      if (Array.isArray(value)) {
        if (value.length === 0) {
          result = false;
        } else if (typeof value[0] !== 'object') {
          result = value.indexOf(optionVal) !== -1;
        } else if (valueKey) {
          result = value.some(function (valueItem) {
            var valueValue = typeof valueKey === 'function' ? valueKey(valueItem) : valueItem[valueKey];
            return valueValue === optionVal;
          });
        }
      } else if (valueKey && typeof value === 'object') {
        var valueValue = typeof valueKey === 'function' ? valueKey(value) : value[valueKey];
        result = valueValue === optionVal;
      } else {
        result = value === optionVal;
      }
    }

    return result;
  }, [optionValue, selected, value, valueKey]);
  var onSearchChange = (0, _react.useCallback)(function (event) {
    var nextSearch = event.target.value;
    setSearch(nextSearch);
    setActiveIndex(-1);
    onSearch(nextSearch);
  }, [onSearch]);
  (0, _react.useEffect)(function () {
    if (search !== undefined && onSearch) {
      var timer = setTimeout(function () {
        return onSearch(search);
      }, theme.global.debounceDelay);
      return function () {
        return clearTimeout(timer);
      };
    }

    return undefined;
  }, [onSearch, search, theme.global]);
  var selectOption = (0, _react.useCallback)(function (index) {
    return function (event) {
      if (onChange) {
        var nextValue;
        var nextSelected;

        if (multiple) {
          var nextOptionIndexesInValue = optionIndexesInValue.slice(0);
          var valueIndex = optionIndexesInValue.indexOf(index);

          if (valueIndex === -1) {
            nextOptionIndexesInValue.push(index);
          } else {
            nextOptionIndexesInValue.splice(valueIndex, 1);
          }

          nextValue = nextOptionIndexesInValue.map(function (i) {
            return valueKey && valueKey.reduce ? (0, _utils2.applyKey)(options[i], valueKey) : options[i];
          });
          nextSelected = nextOptionIndexesInValue;
        } else {
          nextValue = valueKey && valueKey.reduce ? (0, _utils2.applyKey)(options[index], valueKey) : options[index];
          nextSelected = index;
        }

        onChange(event, {
          option: options[index],
          value: nextValue,
          selected: nextSelected
        });
      }
    };
  }, [multiple, onChange, optionIndexesInValue, options, valueKey]);
  var onNextOption = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = activeIndex + 1;

    while (nextActiveIndex < options.length && isDisabled(nextActiveIndex)) {
      nextActiveIndex += 1;
    }

    if (nextActiveIndex !== options.length) {
      setActiveIndex(nextActiveIndex);
      setKeyboardNavigation(true);
    }
  }, [activeIndex, isDisabled, options]);
  var onPreviousOption = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    var nextActiveIndex = activeIndex - 1;

    while (nextActiveIndex >= 0 && isDisabled(nextActiveIndex)) {
      nextActiveIndex -= 1;
    }

    if (nextActiveIndex >= 0) {
      setActiveIndex(nextActiveIndex);
      setKeyboardNavigation(true);
    }
  }, [activeIndex, isDisabled]);
  var onActiveOption = (0, _react.useCallback)(function (index) {
    return function () {
      if (!keyboardNavigation) setActiveIndex(index);
    };
  }, [keyboardNavigation]);
  var onSelectOption = (0, _react.useCallback)(function (event) {
    if (activeIndex >= 0) {
      event.preventDefault(); // prevent submitting forms

      selectOption(activeIndex)(event);
    }
  }, [activeIndex, selectOption]);
  var customSearchInput = theme.select.searchInput;
  var SelectTextInput = customSearchInput || _TextInput.TextInput;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  return /*#__PURE__*/_react["default"].createElement(_Keyboard.Keyboard, {
    onEnter: onSelectOption,
    onUp: onPreviousOption,
    onDown: onNextOption,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/_react["default"].createElement(_StyledSelect.StyledContainer, {
    ref: ref,
    as: _Box.Box,
    id: id ? id + "__select-drop" : undefined,
    dropHeight: dropHeight
  }, renderOptionTop && renderOptionTop({
    options: options,
    value: value,
    isSelected: isSelected,
    isDisabled: isDisabled,
    selectOption: selectOption,
    onMore: onMore,
    replace: replace,
    activeIndex: activeIndex,
    onActiveOption: onActiveOption,
    optionLabel: optionLabel,
    optionValue: optionValue
  }), onSearch && !customSearch && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    pad: !customSearchInput ? 'xsmall' : undefined,
    flex: false
  }, /*#__PURE__*/_react["default"].createElement(SelectTextInput, {
    focusIndicator: !customSearchInput,
    size: "small",
    ref: searchRef,
    type: "search",
    value: search || '',
    placeholder: searchPlaceholder,
    onChange: onSearchChange
  })), onSearch && customSearch && customSearch({
    search: search,
    onSearchChange: onSearchChange
  }), !renderCustomContent && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(OptionsBox, {
    role: "menubar",
    tabIndex: "-1",
    ref: optionsRef
  }, options.length > 0 ? /*#__PURE__*/_react["default"].createElement(_InfiniteScroll.InfiniteScroll, {
    items: options,
    step: theme.select.step,
    onMore: onMore,
    replace: replace,
    show: activeIndex !== -1 ? activeIndex : undefined
  }, function (option, index, optionRef) {
    var optionDisabled = isDisabled(index);
    var optionSelected = isSelected(index);
    var optionActive = activeIndex === index;
    return /*#__PURE__*/_react["default"].createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      ref: optionRef,
      tabIndex: "-1",
      role: "menuitem",
      hoverIndicator: theme.select.activeColor,
      disabled: optionDisabled || undefined,
      active: optionActive,
      selected: optionSelected,
      option: option,
      plain: true,
      onMouseOver: !optionDisabled ? onActiveOption(index) : undefined,
      onClick: !optionDisabled ? selectOption(index) : undefined
    }, children ? children(option, index, options, {
      active: optionActive,
      disabled: optionDisabled,
      selected: optionSelected
    }) : /*#__PURE__*/_react["default"].createElement(OptionBox, _extends({}, selectOptionsStyle, {
      selected: optionSelected
    }), /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.select.options.text, optionLabel(index))));
  }) : /*#__PURE__*/_react["default"].createElement(SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: emptySearchMessage
  }, /*#__PURE__*/_react["default"].createElement(OptionBox, selectOptionsStyle, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.select.container.text, emptySearchMessage)))), renderOptionBottom && renderOptionBottom({
    options: options,
    value: value,
    isSelected: isSelected,
    isDisabled: isDisabled,
    selectOption: selectOption,
    onMore: onMore,
    replace: replace,
    activeIndex: activeIndex,
    onActiveOption: onActiveOption,
    optionLabel: optionLabel,
    optionValue: optionValue
  })), renderCustomContent && renderCustomContent({
    options: options,
    value: value,
    isSelected: isSelected,
    isDisabled: isDisabled,
    selectOption: selectOption,
    onMore: onMore,
    replace: replace,
    activeIndex: activeIndex,
    onActiveOption: onActiveOption,
    optionLabel: optionLabel,
    optionValue: optionValue
  })));
});
exports.SelectContainer = SelectContainer;