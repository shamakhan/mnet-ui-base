import React, { useState } from 'react';

import { Box, Select } from 'mnet-ui-base';

export const Simple = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
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
    </div>
  );
};

export default {
  title: 'Input/Select/Simple',
};
