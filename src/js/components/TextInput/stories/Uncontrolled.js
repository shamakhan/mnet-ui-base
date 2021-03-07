import React from 'react';

import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Uncontrolled = () => (
  <MnetUIBase full theme={mnet}>
    <Box fill align="center" justify="start" pad="large">
      <Box width="medium">
        <TextInput
          onChange={event => console.log('Change', event.target.value)}
        />
      </Box>
    </Box>
  </MnetUIBase>
);

Uncontrolled.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/TextInput/Uncontrolled',
};
