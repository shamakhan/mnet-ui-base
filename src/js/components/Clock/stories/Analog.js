import React from 'react';

import { Box, Clock, Text } from 'mnet-ui-base';

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
  <>
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
  </>
);

Analog.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Clock/Analog',
};
