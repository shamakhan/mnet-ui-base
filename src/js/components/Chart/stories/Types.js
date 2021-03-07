import React from 'react';

import { MnetUIBase, Box, Chart, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

export const Types = () => (
  <MnetUIBase theme={mnet}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} />
        </Box>
      ))}
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Chart/Types',
};
