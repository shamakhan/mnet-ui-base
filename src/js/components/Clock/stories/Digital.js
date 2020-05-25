import React from 'react';

import { Box, Clock } from 'mnet-ui-base';

const DigitalClock = () => (
  <>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" />
    </Box>
  </>
);

Digital.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Clock/Digital',
};
