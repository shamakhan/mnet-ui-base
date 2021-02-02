function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, CheckBox, Text } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';

var CheckBoxMaterial = function CheckBoxMaterial(props) {
  var _useState = useState(true),
      checked = _useState[0],
      setChecked = _useState[1];

  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: hb
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(CheckBox, _extends({}, props, {
    label: /*#__PURE__*/React.createElement(Text, {
      color: "dark-1",
      size: "large"
    }, "Interested ?"),
    checked: checked,
    onChange: function onChange(event) {
      return setChecked(event.target.checked);
    }
  }))));
};

storiesOf('CheckBox', module).add('CheckBoxMaterial', function () {
  return /*#__PURE__*/React.createElement(CheckBoxMaterial, null);
});