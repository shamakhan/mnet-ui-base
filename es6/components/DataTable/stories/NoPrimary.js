import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes'; // Source code for the data can be found here
// https://github.com/mnet/grommet/blob/master/src/js/components/DataTable/stories/data.js

import { DATA } from './data';
var columns = [{
  property: 'name',
  header: 'Name'
}, {
  property: 'location',
  header: 'Location'
}];

var Example = function Example() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(DataTable, {
    columns: columns,
    data: DATA,
    step: 10,
    primaryKey: false
  })));
};

storiesOf('DataTable', module).add('No Primary', function () {
  return React.createElement(Example, null);
});