import React from 'react';

import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Uncontrolled = () => (
  <MnetUIBase full theme={mnet}>
    <Box fill align="center" justify="start" pad="large">
      <Select
        id="select"
        name="select"
        placeholder="Select"
        options={['one', 'two']}
        onChange={({ option }) => console.log(option)}
      />
    </Box>
  </MnetUIBase>
);

Uncontrolled.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/Select/Uncontrolled',
};
