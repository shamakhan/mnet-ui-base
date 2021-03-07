import React from 'react';

import { MnetUIBase, Box, Chart, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

export const Point = () => (
  <MnetUIBase theme={mnet}>
    <Box direction="row-responsive" wrap pad="large">
      {['circle', 'square', 'diamond', 'star', 'triangle', 'triangleDown'].map(
        point => (
          <Box key={point} margin="medium">
            <Heading size="small" textAlign="center">
              {point}
            </Heading>
            <Chart type="point" values={values} point={point} />
          </Box>
        ),
      )}
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Chart/Point',
};
