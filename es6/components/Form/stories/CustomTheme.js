import React from 'react';
import { storiesOf } from '@storybook/react';
import { deepMerge } from 'mnet-ui-base/utils';
import { mnet, Box, FormField, TextArea, MnetUIBase } from 'mnet-ui-base';
var customFormFieldTheme = {
  global: {
    font: {
      size: '13px'
    },
    input: {
      weight: 400
    }
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'xsmall',
      margin: {
        vertical: '0',
        bottom: 'small',
        horizontal: '0'
      },
      weight: 600
    },
    border: false,
    margin: 0
  }
};

var CustomFormField = function CustomFormField() {
  return React.createElement(MnetUIBase, {
    theme: deepMerge(mnet, customFormFieldTheme)
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(FormField, {
    label: "Label",
    htmlFor: "text-area"
  }, React.createElement(TextArea, {
    id: "text-area",
    placeholder: "placeholder"
  }))));
};

storiesOf('Form', module).add('Custom Theme', function () {
  return React.createElement(CustomFormField, null);
});