import React from 'react';

import { Box, MnetUIBase, Clock } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Countdown = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" time="PT0H0M20S" run="backward" />
    </Box>
  </MnetUIBase>
);

Countdown.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Clock/Countdown',
};
