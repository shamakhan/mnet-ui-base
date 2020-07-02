function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { InfiniteScroll } from '../InfiniteScroll';
import { Text } from '../Text';
import { OptionBox, OptionsBox, SelectOption } from './StyledMultiSelect';
import { OptionWithCheckControl } from './OptionWithCheckControl';
import { OptionChips } from './OptionChips';
import { ControlButton } from './ControlButton';
import { Searchbox } from './Searchbox';

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
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var allSelected = options.every(function (item, index) {
    return isSelected(index);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, renderSearch && /*#__PURE__*/React.createElement(Searchbox, {
    placeholder: searchPlaceholder,
    value: searchValue,
    onValueChange: onSearchChange
  }), /*#__PURE__*/React.createElement(OptionsBox, {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, index === 0 && /*#__PURE__*/React.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
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
    }, /*#__PURE__*/React.createElement(OptionWithCheckControl, {
      selected: allSelected,
      label: "Select All"
    })), /*#__PURE__*/React.createElement(SelectOption // eslint-disable-next-line react/no-array-index-key
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
    }, /*#__PURE__*/React.createElement(OptionWithCheckControl, {
      selected: optionSelected,
      label: optionLabel(index)
    })));
  }) : /*#__PURE__*/React.createElement(SelectOption, {
    key: "search_empty",
    tabIndex: "-1",
    role: "menuitem",
    hoverIndicator: "background",
    disabled: true,
    option: "No values available"
  }, /*#__PURE__*/React.createElement(OptionBox, selectOptionsStyle, /*#__PURE__*/React.createElement(Text, theme.select.container.text, emptySearchMessage || 'No values available')))), showOptionChips && /*#__PURE__*/React.createElement(OptionChips, {
    width: width,
    options: options,
    value: value,
    isSelected: isSelected,
    optionLabel: optionLabel,
    selectOption: selectOption,
    clearAll: setValues
  }), showControlButtons && /*#__PURE__*/React.createElement(ControlButton, {
    onUpdate: onUpdate,
    onCancel: onCancel
  }));
};

export { SingleColumnSelect };