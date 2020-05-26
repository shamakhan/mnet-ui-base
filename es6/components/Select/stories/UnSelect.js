import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Select, Button } from 'mnet-ui-base';
var optionList = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

var UnSelect = function UnSelect() {
  var _useState = useState(''),
      value = _useState[0],
      setValue = _useState[1];

  var _onChange = function onChange(e) {
    setValue(e.value);
  };

  var onClickClearOptions = function onClickClearOptions() {
    setValue('');
  };

  return React.createElement(React.Fragment, null, React.createElement(Box, {
    pad: "medium",
    direction: "row",
    align: "center",
    justify: "center",
    gap: "small"
  }, React.createElement(Select, {
    options: optionList,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    value: value,
    placeholder: "Select multiple options",
    multiple: true
  }), React.createElement(Button, {
    onClick: onClickClearOptions,
    disabled: !value,
    plain: true,
    label: "Clear All"
  })));
};

storiesOf('Select', module).add('UnSelect', function () {
  return React.createElement(UnSelect, null);
});