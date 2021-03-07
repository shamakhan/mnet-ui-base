import React from 'react';

import { MnetUIBase, Box, Stack } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Fill = () => (
  <MnetUIBase theme={mnet} full>
    <Stack fill>
      <Box background="brand" fill>
        Test
      </Box>
    </Stack>
  </MnetUIBase>
);

export default {
  title: 'Layout/Stack/Fill',
};
