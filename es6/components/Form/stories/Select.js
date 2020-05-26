import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, Form, FormField, Select } from 'mnet-ui-base';
var options = [{
  label: 'option 1',
  value: 1
}, {
  label: 'option 2',
  value: 2
}, {
  label: 'option 3',
  value: 3
}];

var FormFieldSelect = function FormFieldSelect() {
  var _useState = useState({}),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = useCallback(function (nextValue) {
    return setValue(nextValue);
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Form, {
    value: value,
    onChange: onChange,
    onSubmit: function onSubmit() {
      return console.log('Submit', value);
    }
  }, React.createElement(FormField, {
    label: "Label",
    name: "select"
  }, React.createElement(Select, {
    name: "select",
    placeholder: "placeholder",
    options: options,
    labelKey: "label",
    valueKey: "value"
  })), React.createElement(Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))));
};

storiesOf('Form', module).add('Select', function () {
  return React.createElement(FormFieldSelect, null);
});