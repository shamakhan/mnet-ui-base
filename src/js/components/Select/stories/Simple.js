import React, { useState } from 'react';

import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large" gap="medium">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/Select/Simple',
};
