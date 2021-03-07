import React from 'react';

import { MnetUIBase, Box, Chart, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const values = [
  [10, 20, 30],
  [20, 30, 60],
  [30, 15, 20],
];

export const Range = () => (
  <MnetUIBase theme={mnet}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} thickness="small" />
        </Box>
      ))}
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Chart/Range',
};
