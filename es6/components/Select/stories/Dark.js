import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var DarkSelect = function DarkSelect() {
  var options = ['one', 'two'];

  var _useState = useState(''),
      value = _useState[0],
      setValue = _useState[1];

  return React.createElement(MnetUIBase, {
    full: true,
    theme: mnet
  }, React.createElement(Box, {
    fill: true,
    background: "dark-1",
    align: "center",
    justify: "center"
  }, React.createElement(Select, {
    placeholder: "Select",
    value: value,
    options: options,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setValue(option);
    }
  })));
};

storiesOf('Select', module).add('Dark', function () {
  return React.createElement(DarkSelect, null);
});