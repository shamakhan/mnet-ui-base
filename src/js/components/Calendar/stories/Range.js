import React from 'react';

import { Box, Calendar, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Range = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Calendar dates={[['2020-04-03', '2020-04-08']]} range />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Visualizations/Calendar/Range',
};
