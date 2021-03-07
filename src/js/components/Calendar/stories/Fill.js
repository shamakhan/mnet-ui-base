import React from 'react';

import { Box, Calendar, MnetUIBase } from 'mnet-ui-base';

import { mnet } from 'mnet-ui-base/themes';

export const Fill = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center">
      <Box height="large" width="large" border>
        <Calendar fill daysOfWeek />
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Calendar/Fill',
};
