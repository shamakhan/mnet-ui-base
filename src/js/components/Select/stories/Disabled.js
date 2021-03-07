import React, { useState } from 'react';

import { Box, MnetUIBase, Select, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Disabled = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large" gap="medium">
        <Text weight="bold">Disabled</Text>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          disabled
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/Select/Disabled',
};
