import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import { MnetUIBase, Box, Carousel } from 'mnet-ui-base';

const customTheme = {
  carousel: {
    animation: {
      duration: 400,
    },
    icons: {
      color: 'blue',
    },
    disabled: {
      icons: {
        color: 'grey',
      },
    },
  },
};

export const CustomCarousel = ({ controls, ...rest }) => (
  <MnetUIBase theme={customTheme}>
    <Box align="center" pad="large">
      <Carousel controls={controls} {...rest}>
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

CustomCarousel.storyName = 'Custom controls';

export default {
  title: `Media/Carousel/Custom controls`,
};
