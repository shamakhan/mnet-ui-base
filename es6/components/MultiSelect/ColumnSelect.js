function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { InfiniteScroll } from '../InfiniteScroll';
import { Text } from '../Text';
import { Box } from '../Box';
import { OptionsBox, SelectOption } from './StyledMultiSelect';
import { OptionWithCheckControl } from './OptionWithCheckControl';
import { OptionChips } from './OptionChips';
import { ControlButton } from './ControlButton';
import { Searchbox } from './Searchbox';
import { CustomMultiSelect } from './CustomMultiSelect';

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
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var allSelected = options && options.every(function (item, index) {
    return isSelected(index);
  });
  var setOption = useCallback(function (event, type, index) {
    setIncExcVal(type);
    if (index !== -1) selectOption(index)(event);else setValues(allSelected ? [] : options.map(function (item, i) {
      return optionValue(i);
    }));
  }, [allSelected, optionValue, options, selectOption, setIncExcVal, setValues]);
  var onChipRemove = useCallback(function (event, index) {
    if (inclusionExclusion && value.length === 1) setIncExcVal(null);
    selectOption(index)(event);
  }, [inclusionExclusion, selectOption, setIncExcVal, value]);
  var setUnsetChips = useCallback(function (updatedValues) {
    if (inclusionExclusion && !updatedValues.length) setIncExcVal(null);
    setValues(updatedValues);
  }, [inclusionExclusion, setIncExcVal, setValues]);

  var renderOptionChips = function renderOptionChips() {
    return /*#__PURE__*/React.createElement(OptionChips, {
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
    return /*#__PURE__*/React.createElement(CustomMultiSelect, {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, renderSearch && /*#__PURE__*/React.createElement(Searchbox, {
    placeholder: searchPlaceholder,
    value: searchValue,
    onValueChange: onSearchChange,
    layout: layout
  }), /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    height: height || 'small'
  }, /*#__PURE__*/React.createElement(Box, {
    width: width,
    border: [{
      side: 'bottom',
      color: theme.multiselect.rightPanel.border
    }]
  }, /*#__PURE__*/React.createElement(OptionsBox, {
    role: "menubar",
    tabIndex: "-1"
  }, options.length > 0 ? /*#__PURE__*/React.createElement(InfiniteScroll, {
    items: options,
    step: theme.select.step,
    onMore: onMore,
    replace: replace,
    show: activeIndex !== -1 ? activeIndex : undefined
  }, function (option, index, optionRef) {
    var optionDisabled = isDisabled(index);
    var optionSelected = isSelected(index);
    var optionActive = activeIndex === index;
    return /*#__PURE__*/React.createElement(React.Fragment, null, index === 0 && showSelectAll && /*#__PURE__*/React.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
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
    }, /*#__PURE__*/React.createElement(OptionWithCheckControl, {
      selected: allSelected,
      label: "Select All",
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      onSelect: function onSelect(event, type) {
        return setOption(event, type, -1);
      }
    })), /*#__PURE__*/React.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
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
    }, /*#__PURE__*/React.createElement(OptionWithCheckControl, {
      selected: optionSelected,
      label: optionLabel(index),
      inclusionExclusion: inclusionExclusion,
      isExcluded: isExcluded,
      onSelect: function onSelect(event, type) {
        return setOption(event, type, index);
      }
    })));
  }) : /*#__PURE__*/React.createElement(SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: "No values available"
  }, /*#__PURE__*/React.createElement(Box, selectOptionsStyle, /*#__PURE__*/React.createElement(Text, theme.select.container.text, emptySearchMessage || 'No values available'))))), layout === 'double-column' && /*#__PURE__*/React.createElement(Box, {
    width: width,
    border: [{
      side: 'left',
      color: theme.multiselect.rightPanel.border
    }, {
      side: 'bottom',
      color: theme.multiselect.rightPanel.border
    }]
  }, renderOptionChips())), showOptionChips && layout === 'single-column' && renderOptionChips(), showControlButtons && /*#__PURE__*/React.createElement(ControlButton, {
    onUpdate: onUpdate,
    onCancel: onCancel
  }));
};

export { ColumnSelect };