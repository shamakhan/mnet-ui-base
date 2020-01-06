import React from 'react';

import { Box, MnetUIBase, Clock, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const sizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'huge',
];

export const Analog = () => (
  <MnetUIBase theme={mnet}>
    <Box direction="row" gap="small" pad="large">
      {sizes.map(size => (
        <Box key={size} align="center">
          <Text>{size}</Text>
          <Clock type="analog" size={size} />
        </Box>
      ))}
    </Box>
    <Box pad="large">
      <Text>
        xxlarge and huge sizes are equal. The latter is kept for beckwards
        compatibility.
      </Text>
    </Box>
  </MnetUIBase>
);

Analog.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Clock/Analog',
};
