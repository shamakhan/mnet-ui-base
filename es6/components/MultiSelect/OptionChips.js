function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { OptionsBox } from './StyledMultiSelect';

var OptionChips = function OptionChips(_ref) {
  var options = _ref.options,
      value = _ref.value,
      isSelected = _ref.isSelected,
      optionLabel = _ref.optionLabel,
      selectOption = _ref.selectOption,
      clearAll = _ref.clearAll,
      width = _ref.width;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var OptionWrapper = styled(Box).withConfig({
    displayName: "OptionChips__OptionWrapper",
    componentId: "sc-1w3ospt-0"
  })(["", ";"], function (props) {
    return props.theme.multiselect.chips.wrapper.extend;
  });

  var getSelectedOption = function getSelectedOption() {
    return options.reduce(function (acc, item, index) {
      if (isSelected(index)) acc.push(index);
      return acc;
    }, []);
  };

  return /*#__PURE__*/React.createElement(OptionsBox, null, Array.isArray(value) && value.length > 0 && /*#__PURE__*/React.createElement(OptionWrapper, _extends({
    width: width
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), getSelectedOption().map(function (item) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      key: item
    }, theme.multiselect.chips.option), /*#__PURE__*/React.createElement(Text, theme.multiselect.chips.label, optionLabel(item)), /*#__PURE__*/React.createElement(Close, _extends({
      onClick: selectOption(item)
    }, theme.multiselect.chips.icon)));
  }), /*#__PURE__*/React.createElement(Button, {
    focusIndicator: false,
    onClick: function onClick() {
      return clearAll([]);
    },
    plain: true
  }, /*#__PURE__*/React.createElement(Box, {
    border: {
      side: 'bottom',
      color: theme.multiselect.chips.clear.color
    }
  }, /*#__PURE__*/React.createElement(Text, theme.multiselect.chips.clear, "CLEAR ALL")))));
};

export { OptionChips };