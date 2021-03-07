import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import { MnetUIBase, Box, Carousel } from 'mnet-ui-base';

export const Initial = () => (
  <MnetUIBase>
    <Box align="center" pad="large">
      <Carousel initialChild={1}>
        <Box pad="xlarge" background="accent-1">
          <Attraction size="xlarge" />
        </Box>
        <Box pad="xlarge" background="accent-2">
          <TreeOption size="xlarge" />
        </Box>
        <Box pad="xlarge" background="accent-3">
          <Car size="xlarge" />
        </Box>
      </Carousel>
    </Box>
  </MnetUIBase>
);

Initial.storyName = 'Initial child';

export default {
  title: `Media/Carousel/Initial child`,
};
