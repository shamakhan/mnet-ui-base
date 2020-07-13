"use strict";

exports.__esModule = true;
exports.ColumnSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _InfiniteScroll = require("../InfiniteScroll");

var _Text = require("../Text");

var _Box = require("../Box");

var _StyledMultiSelect = require("./StyledMultiSelect");

var _OptionWithCheckControl = require("./OptionWithCheckControl");

var _OptionChips = require("./OptionChips");

var _ControlButton = require("./ControlButton");

var _Searchbox = require("./Searchbox");

var _CustomMultiSelect = require("./CustomMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ColumnSelect = function ColumnSelect(_ref) {
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
      layout = _ref.layout,
      width = _ref.width,
      height = _ref.height,
      emptySearchMessage = _ref.emptySearchMessage,
      showSelectAll = _ref.showSelectAll,
      showOptionChips = _ref.showOptionChips,
      showControlButtons = _ref.showControlButtons,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      setIncExcVal = _ref.setIncExcVal,
      renderSearch = _ref.renderSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      searchValue = _ref.searchValue,
      onSearchChange = _ref.onSearchChange,
      renderEmptySelected = _ref.renderEmptySelected,
      onValueChange = _ref.onValueChange,
      custom = _ref.custom;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var allSelected = options && options.every(function (item, index) {
    return isSelected(index);
  });
  var setOption = (0, _react.useCallback)(function (event, type, index) {
    setIncExcVal(type);
    if (index !== -1) selectOption(index)(event);else setValues(allSelected ? [] : options.map(function (item, i) {
      return optionValue(i);
    }));
  }, [allSelected, optionValue, options, selectOption, setIncExcVal, setValues]);
  var onChipRemove = (0, _react.useCallback)(function (event, index) {
    if (inclusionExclusion && value.length === 1) setIncExcVal(null);
    selectOption(index)(event);
  }, [inclusionExclusion, selectOption, setIncExcVal, value]);
  var setUnsetChips = (0, _react.useCallback)(function (updatedValues) {
    if (inclusionExclusion && !updatedValues.length) setIncExcVal(null);
    setValues(updatedValues);
  }, [inclusionExclusion, setIncExcVal, setValues]);

  var renderOptionChips = function renderOptionChips() {
    return /*#__PURE__*/_react["default"].createElement(_OptionChips.OptionChips, {
      width: width,
      height: height || 'small',
      options: options,
      value: value,
      isSelected: isSelected,
      optionLabel: optionLabel,
      onRemove: onChipRemove,
      clearAll: setUnsetChips,
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      renderEmptySelected: renderEmptySelected,
      layout: layout
    });
  };

  if (custom) {
    return /*#__PURE__*/_react["default"].createElement(_CustomMultiSelect.CustomMultiSelect, {
      value: value,
      layout: layout,
      onValueChange: onValueChange,
      renderSearch: renderSearch,
      placeholder: searchPlaceholder,
      renderEmptySelected: renderEmptySelected,
      width: width,
      height: height,
      custom: custom,
      isExcluded: isExcluded,
      setIncExcVal: setIncExcVal,
      inclusionExclusion: inclusionExclusion
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderSearch && /*#__PURE__*/_react["default"].createElement(_Searchbox.Searchbox, {
    placeholder: searchPlaceholder,
    value: searchValue,
    onValueChange: onSearchChange,
    layout: layout
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    height: height || 'small'
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: width,
    border: [{
      side: 'bottom',
      color: theme.multiselect.rightPanel.border
    }]
  }, /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionsBox, {
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
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, index === 0 && showSelectAll && /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectOption // eslint-disable-next-line react/no-array-index-key
    , {
      key: index + "_select_all",
      tabIndex: "-1",
      role: "menuitem",
      hoverIndicator: "light-5",
      selected: allSelected,
      plain: true,
      onClick: !inclusionExclusion || inclusionExclusion && isExcluded !== null ? function () {
        return setUnsetChips(allSelected ? [] : options.map(function (item, ind) {
          return optionValue(ind);
        }));
      } : undefined
    }, /*#__PURE__*/_react["default"].createElement(_OptionWithCheckControl.OptionWithCheckControl, {
      selected: allSelected,
      label: "Select All",
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      onSelect: function onSelect(event, type) {
        return setOption(event, type, -1);
      }
    })), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectOption // eslint-disable-next-line react/no-array-index-key
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
      onClick: !optionDisabled && !inclusionExclusion || !optionDisabled && inclusionExclusion && isExcluded !== null ? selectOption(index) : undefined
    }, /*#__PURE__*/_react["default"].createElement(_OptionWithCheckControl.OptionWithCheckControl, {
      selected: optionSelected,
      label: optionLabel(index),
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      onSelect: function onSelect(event, type) {
        return setOption(event, type, index);
      }
    })));
  }) : /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: "No values available"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, selectOptionsStyle, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.select.container.text, emptySearchMessage || 'No values available'))))), layout === 'double-column' && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: width,
    border: [{
      side: 'left',
      color: theme.multiselect.rightPanel.border
    }, {
      side: 'bottom',
      color: theme.multiselect.rightPanel.border
    }]
  }, renderOptionChips())), showOptionChips && layout === 'single-column' && renderOptionChips(), showControlButtons && /*#__PURE__*/_react["default"].createElement(_ControlButton.ControlButton, {
    onUpdate: onUpdate,
    onCancel: onCancel
  }));
};

exports.ColumnSelect = ColumnSelect;