import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import { Box, Carousel } from 'mnet-ui-base';

export const Simple = () => (
  <>
    <Box align="center" pad="large">
      <Carousel>
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
  </>
);

Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Media/Carousel/Simple',
};
