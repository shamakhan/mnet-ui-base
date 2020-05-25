import React from 'react';

import { Box, Image, Anchor } from 'mnet-ui-base';

export const Fill = () => (
  <>
    <Box align="start" gap="small">
      <Box height="small" width="small" border>
        <Anchor href="#">
          <Image fit="cover" fill src="//v2.grommet.io/assets/IMG_4245.jpg" />
        </Anchor>
      </Box>
    </Box>
  </>
);

export default {
  title: 'Media/Image/Fill',
};
