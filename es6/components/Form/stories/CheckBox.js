function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { mnet, Box, FormField, CheckBox, MnetUIBase } from 'mnet-ui-base';

var FormFieldCheckBox = function FormFieldCheckBox(props) {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(FormField, _extends({
    label: "Label",
    htmlFor: "check-box"
  }, props), React.createElement(Box, {
    pad: {
      horizontal: 'small',
      vertical: 'xsmall'
    }
  }, React.createElement(CheckBox, {
    id: "check-box",
    label: "CheckBox"
  })))));
};

storiesOf('Form', module).add('CheckBox', function () {
  return React.createElement(FormFieldCheckBox, null);
});