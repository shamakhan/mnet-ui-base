"use strict";

exports.__esModule = true;
exports.MultiSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = require("../Box");

var _Select = require("../Select");

var _ColumnSelect = require("./ColumnSelect");

var _ValueLabelWithIcon = require("./ValueLabelWithIcon");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MultiSelect = function MultiSelect(_ref) {
  var width = _ref.width,
      height = _ref.height,
      options = _ref.options,
      valueProp = _ref.value,
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
      isExcludedProp = _ref.isExcluded,
      onIncExcChange = _ref.onIncExcChange,
      renderEmptySelected = _ref.renderEmptySelected,
      validate = _ref.validate,
      size = _ref.size,
      isOpenState = _ref.isOpenState,
      isEnableOutSideClick = _ref.isEnableOutSideClick,
      shouldRenderInDrop = _ref.shouldRenderInDrop,
      placeholder = _ref.placeholder,
      rest = _objectWithoutPropertiesLoose(_ref, ["width", "height", "options", "value", "labelKey", "valueKey", "onValueChange", "layout", "onSearch", "searchPlaceholder", "emptySearchMessage", "withSelectAll", "withOptionChips", "withUpdateCancelButtons", "searchable", "custom", "withInclusionExclusion", "isExcluded", "onIncExcChange", "renderEmptySelected", "validate", "size", "isOpenState", "isEnableOutSideClick", "shouldRenderInDrop", "placeholder"]);

  var _useState = (0, _react.useState)(valueProp),
      internalValue = _useState[0],
      updateInternalValue = _useState[1];

  var _useState2 = (0, _react.useState)(isExcludedProp),
      internalIsExcluded = _useState2[0],
      updateInternalIsExcluded = _useState2[1];

  var _useState3 = (0, _react.useState)(isOpenState || false),
      isOpen = _useState3[0],
      updateIsOpen = _useState3[1];

  var _useState4 = (0, _react.useState)(''),
      search = _useState4[0],
      updateSearch = _useState4[1];

  var isExcluded = withUpdateCancelButtons ? internalIsExcluded : isExcludedProp;
  var value = withUpdateCancelButtons ? internalValue : valueProp;
  (0, _react.useEffect)(function () {
    if (!isOpen && withUpdateCancelButtons) {
      updateInternalValue(valueProp);
    }
  }, [isOpen, valueProp, withUpdateCancelButtons]);

  var onClose = function onClose() {
    if (withInclusionExclusion) {
      updateInternalValue(valueProp);
      updateInternalIsExcluded(isExcludedProp);
    }

    updateIsOpen(false);
  };

  var onOpen = function onOpen() {
    if (withInclusionExclusion) {
      updateInternalValue(valueProp);
      updateInternalIsExcluded(isExcludedProp);
    }

    updateIsOpen(true);
  };

  var onIncludeExclude = function onIncludeExclude(newValue) {
    var updater = withUpdateCancelButtons ? updateInternalIsExcluded : onIncExcChange;
    updater(newValue);
  };

  var onCancelClick = function onCancelClick() {
    onClose();
  };

  var onOkClick = function onOkClick() {
    onValueChange(value);

    if (onIncExcChange) {
      onIncExcChange(isExcluded);
    }

    updateIsOpen(false);
  };

  var getValue = function getValue(index, array, param) {
    return (0, _utils.applyKey)(array[index], param);
  };

  var onSearchChange = function onSearchChange(searchInput) {
    var escapedText = searchInput.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    updateSearch(escapedText);
  };

  var getOptions = (0, _react.useCallback)(function () {
    if (!search) {
      return options;
    }

    var exp = new RegExp(search, 'i');
    return options.filter(function (item, index) {
      return exp.test(getValue(index, options, labelKey));
    });
  }, [options, search]);
  var getOptionsNotMatchingSearch = (0, _react.useCallback)(function () {
    if (!search) {
      return [];
    }

    var exp = new RegExp(search, 'i');
    return options.filter(function (item, index) {
      return !exp.test(getValue(index, options, labelKey));
    });
  }, [options, search]);

  var onSelectValueChange = function onSelectValueChange(_ref2) {
    var newValue = _ref2.value;
    var valuesNotMatchingSearch = getOptionsNotMatchingSearch().filter(function (item, index, opt) {
      return value.includes(getValue(index, opt, valueKey));
    }).map(function (item, index, opt) {
      return getValue(index, opt, valueKey);
    });
    var updater = withUpdateCancelButtons ? updateInternalValue : onValueChange;
    updater([].concat(valuesNotMatchingSearch, newValue));
  };

  var renderContent = function renderContent(props) {
    if (['single-column', 'double-column'].includes(layout)) {
      return /*#__PURE__*/_react["default"].createElement(_ColumnSelect.ColumnSelect, _extends({
        layout: layout,
        width: width,
        height: height,
        onOk: onOkClick,
        onCancel: onCancelClick,
        onChange: onSelectValueChange,
        emptySearchMessage: emptySearchMessage,
        showSelectAll: withSelectAll,
        showOptionChips: withOptionChips,
        showControlButtons: withUpdateCancelButtons,
        inclusionExclusion: withInclusionExclusion,
        isExcluded: isExcluded,
        setIncExcVal: onIncludeExclude,
        renderSearch: searchable && !onSearch,
        searchPlaceholder: searchPlaceholder,
        searchValue: search,
        onSearchChange: onSearchChange,
        renderEmptySelected: renderEmptySelected,
        onValueChange: onValueChange,
        custom: custom,
        validate: validate
      }, props));
    }

    return null;
  };

  var renderLabel = function renderLabel() {
    return /*#__PURE__*/_react["default"].createElement(_ValueLabelWithIcon.ValueLabelWithIcon, {
      withInclusionExclusion: withInclusionExclusion,
      isExcluded: isExcluded,
      size: size,
      placeholder: placeholder,
      value: value
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    width: width
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, _extends({
    multiple: true,
    value: value,
    options: getOptions(),
    onChange: onSelectValueChange,
    open: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    closeOnChange: false,
    renderCustomContent: ['single-column', 'double-column'].includes(layout) ? function (props) {
      return renderContent(props);
    } : undefined,
    valueLabel: renderLabel(),
    labelKey: labelKey,
    valueKey: valueKey,
    onSearch: onSearch,
    searchPlaceholder: searchPlaceholder,
    emptySearchMessage: emptySearchMessage,
    isEnableOutSideClick: isEnableOutSideClick,
    shouldRenderInDrop: shouldRenderInDrop,
    size: size
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