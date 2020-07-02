"use strict";

exports.__esModule = true;
exports.MultiSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = require("../Box");

var _Select = require("../Select");

var _useCustomSelectState2 = _interopRequireDefault(require("./useCustomSelectState"));

var _SingleColumnSelect = require("./SingleColumnSelect");

var _ValueLabelWithNumber = require("./ValueLabelWithNumber");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MultiSelect = function MultiSelect(_ref) {
  var width = _ref.width,
      options = _ref.options,
      value = _ref.value,
      labelKey = _ref.labelKey,
      valueKey = _ref.valueKey,
      onValueChange = _ref.onValueChange,
      layout = _ref.layout,
      onSearch = _ref.onSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      emptySearchMessage = _ref.emptySearchMessage,
      withOptionChips = _ref.withOptionChips,
      withUpdateCancelButtons = _ref.withUpdateCancelButtons,
      searchable = _ref.searchable,
      rest = _objectWithoutPropertiesLoose(_ref, ["width", "options", "value", "labelKey", "valueKey", "onValueChange", "layout", "onSearch", "searchPlaceholder", "emptySearchMessage", "withOptionChips", "withUpdateCancelButtons", "searchable"]);

  var _useCustomSelectState = (0, _useCustomSelectState2["default"])(options, value),
      filteredOptions = _useCustomSelectState.filteredOptions,
      previousValue = _useCustomSelectState.previousValue,
      open = _useCustomSelectState.open,
      searchVal = _useCustomSelectState.searchVal,
      setSelectState = _useCustomSelectState.setSelectState;

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
    if (layout === 'single-column') {
      return /*#__PURE__*/_react["default"].createElement(_SingleColumnSelect.SingleColumnSelect, _extends({
        width: width,
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
        showOptionChips: withOptionChips,
        showControlButtons: withUpdateCancelButtons,
        renderSearch: searchable && !onSearch,
        searchPlaceholder: searchPlaceholder,
        searchValue: searchVal || '',
        onSearchChange: function onSearchChange(search) {
          return _onSearchChange(search);
        }
      }, props));
    }

    return null;
  };

  var renderLabel = function renderLabel() {
    return /*#__PURE__*/_react["default"].createElement(_ValueLabelWithNumber.ValueLabelWithNumber, {
      value: "Selected",
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