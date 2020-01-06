import React from 'react';

import { Box, MnetUIBase, Clock, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'grommet/utils';

const override = {
  clock: {
    digital: {
      text: {
        customSize: {
          size: '30px',
          height: 1.234,
        },
      },
    },
  },
};

const theme = deepMerge(mnet, override);

const clockSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];

export const Digital = () => (
  <MnetUIBase theme={theme}>
    <Box direction="row" gap="medium" pad="medium">
      {clockSizes.map(size => (
        <Box key={size} align="center">
          <Text>{size}</Text>
          <Clock type="digital" size={size} />
        </Box>
      ))}
    </Box>

    <Box direction="row" gap="medium" pad="medium">
      <Box align="center">
        <Text>Default size (medium)</Text>
        <Clock type="digital" />
      </Box>
      <Box align="center">
        <Text>Custom size</Text>
        <Clock type="digital" size="customSize" />
      </Box>
    </Box>
  </MnetUIBase>
);

Digital.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Clock/Digital',
};
