import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, CheckBoxGroup, Form, FormField, MnetUIBase, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var CheckBoxGroupForm = function CheckBoxGroupForm() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Heading, {
    level: "3"
  }, "Form with string options"), React.createElement(Form, {
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value,
          touched = _ref.touched;
      return console.log('Submit', value, touched);
    }
  }, React.createElement(FormField, {
    name: "am-pm",
    component: CheckBoxGroup,
    options: ['morning', 'evening']
  }), React.createElement(Button, {
    type: "submit",
    label: "Submit"
  }))), React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Heading, {
    level: "3"
  }, "Form with object options"), React.createElement(Form, {
    onSubmit: function onSubmit(_ref2) {
      var value = _ref2.value,
          touched = _ref2.touched;
      return console.log('Submit object options', value, touched);
    }
  }, React.createElement(FormField, {
    name: "drink"
  }, React.createElement(CheckBoxGroup, {
    name: "drink",
    valueKey: "id",
    options: [{
      label: 'Coffee',
      id: '1'
    }, {
      label: 'Tea',
      id: '2'
    }, {
      label: 'Milk',
      id: '3'
    }]
  })), React.createElement(Button, {
    type: "submit",
    label: "Submit"
  }))));
};

storiesOf('CheckBoxGroup', module).add('Form uncontrolled', function () {
  return React.createElement(CheckBoxGroupForm, null);
});