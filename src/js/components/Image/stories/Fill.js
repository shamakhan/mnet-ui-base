import React from 'react';

import { MnetUIBase, Box, Image, Anchor } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Fill = () => (
  <MnetUIBase theme={mnet}>
    <Box align="start" gap="small">
      <Box height="small" width="small" border>
        <Anchor href="#">
          <Image fit="cover" fill src="//v2.grommet.io/assets/IMG_4245.jpg" />
        </Anchor>
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Media/Image/Fill',
};
