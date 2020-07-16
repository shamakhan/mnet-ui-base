"use strict";

exports.__esModule = true;
exports.MultiSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = require("../Box");

var _Select = require("../Select");

var _useCustomSelectState2 = _interopRequireDefault(require("./useCustomSelectState"));

var _ColumnSelect = require("./ColumnSelect");

var _ValueLabelWithNumber = require("./ValueLabelWithNumber");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MultiSelect = function MultiSelect(_ref) {
  var width = _ref.width,
      height = _ref.height,
      options = _ref.options,
      value = _ref.value,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      onValueChange = _ref.onValueChange,
      layout = _ref.layout,
      onSearch = _ref.onSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      emptySearchMessage = _ref.emptySearchMessage,
      withSelectAll = _ref.withSelectAll,
      withOptionChips = _ref.withOptionChips,
      withUpdateCancelButtons = _ref.withUpdateCancelButtons,
      searchable = _ref.searchable,
      custom = _ref.custom,
      withInclusionExclusion = _ref.withInclusionExclusion,
      isExcluded = _ref.isExcluded,
      onIncExcChange = _ref.onIncExcChange,
      renderEmptySelected = _ref.renderEmptySelected,
      rest = _objectWithoutPropertiesLoose(_ref, ["width", "height", "options", "value", "labelKey", "valueKey", "onValueChange", "layout", "onSearch", "searchPlaceholder", "emptySearchMessage", "withSelectAll", "withOptionChips", "withUpdateCancelButtons", "searchable", "custom", "withInclusionExclusion", "isExcluded", "onIncExcChange", "renderEmptySelected"]);

  var _useCustomSelectState = (0, _useCustomSelectState2["default"])(options, value),
      filteredOptions = _useCustomSelectState.filteredOptions,
      previousValue = _useCustomSelectState.previousValue,
      open = _useCustomSelectState.open,
      searchVal = _useCustomSelectState.searchVal,
      setSelectState = _useCustomSelectState.setSelectState;

  (0, _react.useEffect)(function () {
    setSelectState({
      filteredOptions: options
    });
  }, [options]);
  (0, _react.useEffect)(function () {
    setSelectState({
      previousValue: value
    });
  }, [value]);

  var onCancelClick = function onCancelClick() {
    onValueChange(previousValue);
    setSelectState({
      open: false
    });
  };

  var getValue = function getValue(index, array, param) {
    return (0, _utils.applyKey)(array[index], param);
  };

  var _onSearchChange = function onSearchChange(search) {
    var escapedText = search.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    var exp = new RegExp(escapedText, 'i');
    setSelectState({
      searchVal: search,
      filteredOptions: options.filter(function (item, index) {
        return exp.test(getValue(index, options, labelKey));
      })
    });
  };

  var onSelectValueChange = function onSelectValueChange(selectValue) {
    if (!searchVal) onValueChange(selectValue);else {
      var newValue = value.slice(0);
      var nonSelected = filteredOptions.map(function (val, ind) {
        return getValue(ind, filteredOptions, valueKey);
      });
      selectValue.forEach(function (item) {
        if (nonSelected.includes(item)) nonSelected.splice(nonSelected.indexOf(item), 1);
        if (!value.includes(item)) newValue.push(item);
      });
      onValueChange(newValue.filter(function (item) {
        return !nonSelected.includes(item);
      }));
    }
  };

  var renderContent = function renderContent(props) {
    if (['single-column', 'double-column'].includes(layout)) {
      return /*#__PURE__*/_react["default"].createElement(_ColumnSelect.ColumnSelect, _extends({
        layout: layout,
        width: width,
        height: height,
        onUpdate: function onUpdate() {
          return setSelectState({
            open: false,
            previousValue: value
          });
        },
        onCancel: onCancelClick,
        setValues: function setValues(nextValue) {
          return onSelectValueChange(nextValue);
        },
        emptySearchMessage: emptySearchMessage,
        showSelectAll: withSelectAll,
        showOptionChips: withOptionChips,
        showControlButtons: withUpdateCancelButtons,
        inclusionExclusion: withInclusionExclusion,
        isExcluded: isExcluded,
        setIncExcVal: function setIncExcVal(incExc) {
          return onIncExcChange(incExc);
        },
        renderSearch: searchable && !onSearch,
        searchPlaceholder: searchPlaceholder,
        searchValue: searchVal || '',
        onSearchChange: function onSearchChange(search) {
          return _onSearchChange(search);
        },
        renderEmptySelected: renderEmptySelected,
        onValueChange: onValueChange,
        custom: custom
      }, props));
    }

    return null;
  };

  var renderLabel = function renderLabel() {
    var getLabel = function getLabel() {
      if (withInclusionExclusion && isExcluded) return 'Excluded';
      if (withInclusionExclusion && isExcluded === false) return 'Included';
      return 'Selected';
    };

    return /*#__PURE__*/_react["default"].createElement(_ValueLabelWithNumber.ValueLabelWithNumber, {
      value: getLabel(),
      number: value.length,
      color: "brand"
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: width
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, _extends({
    multiple: true,
    value: value,
    options: filteredOptions,
    onChange: function onChange(_ref2) {
      var nextValue = _ref2.value;
      return onSelectValueChange(nextValue);
    },
    open: open,
    onOpen: function onOpen() {
      return setSelectState({
        open: true
      });
    },
    onClose: withUpdateCancelButtons ? function () {
      return onValueChange(previousValue);
    } : undefined,
    closeOnChange: false,
    renderCustomContent: ['single-column', 'double-column'].includes(layout) ? function (props) {
      return renderContent(props);
    } : undefined,
    valueLabel: renderLabel(),
    labelKey: labelKey,
    valueKey: valueKey,
    onSearch: onSearch,
    searchPlaceholder: searchPlaceholder,
    emptySearchMessage: emptySearchMessage
  }, rest)));
};

MultiSelect.displayName = 'MultiSelect';
var MultiSelectDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  MultiSelectDoc = require('./doc').doc(MultiSelect);
}

var MultiSelectWrapper = MultiSelectDoc || MultiSelect;
exports.MultiSelect = MultiSelectWrapper;