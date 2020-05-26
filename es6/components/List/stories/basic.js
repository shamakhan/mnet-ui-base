import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, List } from 'mnet-ui-base';
import { locations } from './data';

var BasicList = function BasicList() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(List, {
    data: locations
  })));
};

storiesOf('List', module).add('basic', function () {
  return React.createElement(BasicList, null);
});