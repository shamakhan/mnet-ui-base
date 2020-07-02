"use strict";

exports.__esModule = true;
exports.SingleColumnSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _InfiniteScroll = require("../InfiniteScroll");

var _Text = require("../Text");

var _StyledMultiSelect = require("./StyledMultiSelect");

var _OptionWithCheckControl = require("./OptionWithCheckControl");

var _OptionChips = require("./OptionChips");

var _ControlButton = require("./ControlButton");

var _Searchbox = require("./Searchbox");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SingleColumnSelect = function SingleColumnSelect(_ref) {
  var options = _ref.options,
      value = _ref.value,
      isSelected = _ref.isSelected,
      isDisabled = _ref.isDisabled,
      selectOption = _ref.selectOption,
      onMore = _ref.onMore,
      replace = _ref.replace,
      activeIndex = _ref.activeIndex,
      onActiveOption = _ref.onActiveOption,
      optionLabel = _ref.optionLabel,
      optionValue = _ref.optionValue,
      onCancel = _ref.onCancel,
      onUpdate = _ref.onUpdate,
      setValues = _ref.setValues,
      width = _ref.width,
      emptySearchMessage = _ref.emptySearchMessage,
      showOptionChips = _ref.showOptionChips,
      showControlButtons = _ref.showControlButtons,
      renderSearch = _ref.renderSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      searchValue = _ref.searchValue,
      onSearchChange = _ref.onSearchChange;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var allSelected = options.every(function (item, index) {
    return isSelected(index);
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderSearch && /*#__PURE__*/_react["default"].createElement(_Searchbox.Searchbox, {
    placeholder: searchPlaceholder,
    value: searchValue,
    onValueChange: onSearchChange
  }), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionsBox, {
    role: "menubar",
    tabIndex: "-1"
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
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, index === 0 && /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index + "_select_all",
      tabIndex: "-1",
      role: "menuitem",
      hoverIndicator: "light-5",
      selected: allSelected,
      plain: true,
      onClick: function onClick() {
        return setValues(allSelected ? [] : options.map(function (item, ind) {
          return optionValue(ind);
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_OptionWithCheckControl.OptionWithCheckControl, {
      selected: allSelected,
      label: "Select All"
    })), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index,
      ref: optionRef,
      tabIndex: "-1",
      role: "menuitem",
      hoverIndicator: "light-5",
      disabled: optionDisabled || undefined,
      active: optionActive,
      selected: optionSelected,
      option: option,
      plain: true,
      onMouseOver: !optionDisabled ? onActiveOption(index) : undefined,
      onClick: !optionDisabled ? selectOption(index) : undefined
    }, /*#__PURE__*/_react["default"].createElement(_OptionWithCheckControl.OptionWithCheckControl, {
      selected: optionSelected,
      label: optionLabel(index)
    })));
  }) : /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: "No values available"
  }, /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionBox, selectOptionsStyle, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.select.container.text, emptySearchMessage || 'No values available')))), showOptionChips && /*#__PURE__*/_react["default"].createElement(_OptionChips.OptionChips, {
    width: width,
    options: options,
    value: value,
    isSelected: isSelected,
    optionLabel: optionLabel,
    selectOption: selectOption,
    clearAll: setValues
  }), showControlButtons && /*#__PURE__*/_react["default"].createElement(_ControlButton.ControlButton, {
    onUpdate: onUpdate,
    onCancel: onCancel
  }));
};

exports.SingleColumnSelect = SingleColumnSelect;