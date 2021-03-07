import React from 'react';

import { MnetUIBase, Box, Chart } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Pattern = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large" gap="medium">
      {[
        'squares',
        'circles',
        'stripesHorizontal',
        'stripesVertical',
        'stripesDiagonalDown',
        'stripesDiagonalUp',
      ].map(pattern => (
        <Chart
          id="area"
          type="area"
          pattern={pattern}
          thickness="xsmall"
          values={[
            { value: [10, 20] },
            { value: [20, 30] },
            { value: [30, 15] },
          ]}
        />
      ))}
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Chart/Pattern',
};
