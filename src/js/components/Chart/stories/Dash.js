import React from 'react';

import { MnetUIBase, Box, Chart } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Dash = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large" gap="large">
      <Chart type="line" dash values={[20, 30, 15]} />
      <Chart type="line" dash round values={[20, 30, 15]} />
      <Chart type="line" dash thickness="xsmall" values={[20, 30, 15]} />
      <Chart type="line" dash round thickness="xsmall" values={[20, 30, 15]} />

      <Chart
        type="bar"
        dash
        values={[
          [10, 20],
          [20, 30],
          [30, 15],
        ]}
      />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Chart/Dash',
};
