import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Example = function Example() {
  return React.createElement(MnetUIBase, {
    full: true,
    theme: mnet
  }, React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Select, {
    id: "select",
    name: "select",
    placeholder: "Select",
    options: ['one', 'two'],
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return console.log(option);
    }
  })));
};

storiesOf('Select', module).add('Uncontrolled', function () {
  return React.createElement(Example, null);
});