import React from 'react';

import { MnetUIBase, Box, RadioButton } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Disabled = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large" gap="large">
      <RadioButton
        label="option 1"
        name="name"
        value="option 1"
        checked
        disabled
      />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Input/RadioButton/Disabled',
};
