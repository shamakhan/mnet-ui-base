import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, List } from 'mnet-ui-base';
import { data } from './data';

var SecondaryKeyList = function SecondaryKeyList() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(List, {
    data: data.slice(0, 10),
    primaryKey: "entry",
    secondaryKey: "location"
  })));
};

storiesOf('List', module).add('secondaryKey', function () {
  return React.createElement(SecondaryKeyList, null);
});