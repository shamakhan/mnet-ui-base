import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, List } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { locations } from './data';

var BasicList = function BasicList() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(List, {
    data: locations
  })));
};

storiesOf('List', module).add('basic', function () {
  return React.createElement(BasicList, null);
});