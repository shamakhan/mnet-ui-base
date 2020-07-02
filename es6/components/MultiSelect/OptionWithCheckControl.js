function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { Box } from '../Box';
import { Text } from '../Text';
import { OptionBox, CheckBoxWrapper } from './StyledMultiSelect';

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  return /*#__PURE__*/React.createElement(OptionBox, _extends({}, selectOptionsStyle, {
    selected: selected
  }), /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(CheckBoxWrapper, theme.multiselect.checkbox.box, /*#__PURE__*/React.createElement(Box, _extends({}, theme.multiselect.checkbox.check, {
    background: selected ? theme.multiselect.checkbox.check.active.background : 'white',
    border: {
      color: selected ? theme.multiselect.checkbox.check.active.background : theme.multiselect.checkbox.check.active.border
    }
  }), selected && /*#__PURE__*/React.createElement(FormCheckmark, theme.multiselect.checkbox.checkmark))), /*#__PURE__*/React.createElement(Text, theme.select.options.text, label)));
};

export { OptionWithCheckControl };