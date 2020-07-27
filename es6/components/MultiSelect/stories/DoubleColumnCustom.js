import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MultiSelect, Text } from 'mnet-ui-base';

var Example = function Example() {
  var _useState = useState(['google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com', 'google.com', 'media.net', 'testing.com']),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = useState(null),
      isExcluded = _useState2[0],
      setIncExc = _useState2[1];

  var validateDomains = function validateDomains(values) {
    var regx = /^((http|https):\/\/)?([a-zA-Z0-9_][-_a-zA-Z0-9]{0,62}\.)+([a-zA-Z0-9]{1,10})$/;
    return values && values.every(function (val) {
      return regx.test(val);
    });
  };

  return /*#__PURE__*/React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(MultiSelect, {
    value: value,
    onValueChange: function onValueChange(nextValue) {
      return setValue(nextValue);
    },
    layout: "double-column",
    width: "medium",
    height: "large",
    searchPlaceholder: "Search",
    searchable: true,
    custom: {
      label: 'Enter one domain per line'
    },
    withInclusionExclusion: true,
    isExcluded: isExcluded,
    onIncExcChange: function onIncExcChange(nextIncExc) {
      return setIncExc(nextIncExc);
    },
    renderEmptySelected: /*#__PURE__*/React.createElement(Text, null, "No domains selected"),
    validate: {
      callback: validateDomains,
      message: 'Please Enter Correct Domains'
    }
  }));
};

storiesOf('MultiSelect', module).add('Domain Double Custom', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});