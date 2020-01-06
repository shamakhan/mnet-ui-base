import React from 'react';

import { Box, MnetUIBase, Clock } from 'mnet-ui-base';

const analogClockTheme = {
  clock: {
    analog: {
      size: {
        medium: '200px',
      },
      hour: {
        width: '8px',
        shape: 'square',
        color: 'accent-1',
        size: '30px',
      },
      minute: {
        size: '12px',
        width: '6px',
        color: 'grey',
      },
      second: {
        width: '4px',
        color: 'brand',
        size: '5px',
      },
    },
  },
};

export const CustomAnalog = () => (
  <MnetUIBase theme={analogClockTheme}>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </MnetUIBase>
);

CustomAnalog.storyName = 'Custom analog';
CustomAnalog.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Clock/Custom analog',
};
