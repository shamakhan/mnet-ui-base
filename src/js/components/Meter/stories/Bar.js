import React from 'react';

import { Box, Meter } from 'mnet-ui-base';

export const Bar = () => {
  const value = 30;

  return (
    <>
      <Box align="center" pad="large">
        <Meter type="bar" value={value} />
      </Box>
    </>
  );
};

export default {
  title: 'Visualizations/Meter/Bar',
};
