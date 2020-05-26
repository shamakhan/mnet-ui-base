function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, FormField, Form, TextArea } from 'mnet-ui-base';

var FormFieldTextArea = function FormFieldTextArea(props) {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Form, null, React.createElement(FormField, _extends({
    label: "Label",
    htmlFor: "text-area"
  }, props, {
    component: TextArea,
    placeholder: "placeholder"
  })))));
};

storiesOf('Form', module).add('TextArea', function () {
  return React.createElement(FormFieldTextArea, null);
});