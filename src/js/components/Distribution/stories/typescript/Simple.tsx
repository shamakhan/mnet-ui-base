import React from 'react';

import { MnetUIBase, Box, Distribution, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => (
  <MnetUIBase theme={mnet} full>
    <Distribution
      fill
      values={[
        { value: 50, color: 'light-3' },
        { value: 30, color: 'neutral-1' },
        { value: 20, color: 'brand' },
        { value: 10, color: 'light-3' },
        { value: 5, color: 'neutral-1' },
      ]}
    >
      {value => (
        <Box pad="xsmall" background={value.color} fill>
          <Text size="large">{value.value}</Text>
        </Box>
      )}
    </Distribution>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Distribution/Simple',
};
