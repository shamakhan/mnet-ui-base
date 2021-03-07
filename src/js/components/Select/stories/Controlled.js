import React, { useState } from 'react';

import { Box, MnetUIBase, Select, Button } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Controlled = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large" gap="small">
        <Button onClick={() => setOpen(!open)} label="Control the select" />
        <Select
          id="select"
          name="select"
          placeholder="Select"
          open={open}
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/Select/Controlled',
};
