import React from 'react';

import { Box, CheckBoxGroup, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="medium">
      <CheckBoxGroup options={['First', 'Second', 'Third']} />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Input/CheckBoxGroup/Simple',
};
