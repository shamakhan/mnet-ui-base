import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Button, RadioButton } from 'mnet-ui-base';
import { Ascend } from "grommet-icons/es6/icons/Ascend";
import { mnet } from 'mnet-ui-base/themes';

var ChildrenRadioButton = function ChildrenRadioButton() {
  var _React$useState = React.useState(),
      selected = _React$useState[0],
      setSelected = _React$useState[1];

  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, React.createElement(RadioButton, {
    name: "name",
    value: "option 1",
    checked: selected === 'option 1',
    onChange: function onChange(event) {
      return setSelected(event.target.value);
    }
  }, function (_ref) {
    var checked = _ref.checked;
    return React.createElement(Ascend, {
      color: checked ? 'brand' : 'status-unknown'
    });
  }), React.createElement(Button, {
    label: "clear",
    onClick: function onClick() {
      return setSelected(undefined);
    }
  })));
};

storiesOf('RadioButton', module).add('Children', function () {
  return React.createElement(ChildrenRadioButton, null);
});