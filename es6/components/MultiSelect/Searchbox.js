import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';
import { Box } from '../Box';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

var Searchbox = function Searchbox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onValueChange = _ref.onValueChange;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var handleChange = function handleChange(textValue) {
    if (textValue.replace(/\s/g, '').length || !textValue.length) return onValueChange(textValue);
    return null;
  };

  return /*#__PURE__*/React.createElement(Box, theme.multiselect.searchbox.container, /*#__PURE__*/React.createElement(TextInput, {
    plain: true,
    value: value,
    valueLabel: /*#__PURE__*/React.createElement(Text, null, "value"),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    placeholder: /*#__PURE__*/React.createElement(Text, theme.multiselect.searchbox.placeholder, value ? '' : placeholder)
  }), /*#__PURE__*/React.createElement(Search, theme.multiselect.searchbox.icon));
};

export { Searchbox };